#!/usr/bin/env bash
start_time=$(date +%s)

script_version="1.0.0"

command=${1}
source_path=$(pwd)
php_scripts_path="${source_path}/bin/docker/scripts"
dist_path="${source_path}/dist"
cols=$(tput cols)


#######################################
# Get the plugin name from composer.json file.
# Globals:
#   php_scripts_path
#   source_path
# Returns:
#   The plugin name.
#######################################
get_plugin_name() {
    php "${php_scripts_path}/parse-json.php" "${source_path}/composer.json" name | awk -F/ '{print $NF}'
}

#######################################
# Get the plugin version from the main plugin file.
# Returns:
#   The plugin version.
#######################################
get_plugin_version() {
    # TODO: Remove the hardcoded plugin slug
    cat post-expirator.php | grep "* Version:" | sed 's/ //g' | awk -F: '{print $NF}'
}

plugin_name=$(get_plugin_name)
plugin_version=$(get_plugin_version)
tmp_build_dir="${dist_path}/${plugin_name}"

#######################################
# Echo the string as an step in the output.
# Arguments:
#   The message to display.
# Outputs:
#   The passed string after an arrow.
#######################################
echo_step() {
    echo "▶ ${1}"
}

#######################################
# Delete the temporary plugin folder in the dist dir.
# Globals:
#   plugin_name
#   tmp_build_dir
# Outputs:
#   The current step message.
#######################################
clean_dist() {
    echo_step "Removing the folder dist/${plugin_name} if exists"
    rm -rf "${tmp_build_dir}"
}

#######################################
# Build the plugin code to a subdir named
# as the plugin name in the dist dir.
# Globals:
#   tmp_build_dir
#   source_path
# Outputs:
#   Step messages.
#######################################
build_to_dir() {
    clean_dist

    echo_step "Copying plugin files to the dist dir"
    mkdir -p "${tmp_build_dir}"
    rsync -r "${source_path}/" "${tmp_build_dir}" --filter=':- .buildignore'

    echo_step "Running composer install"
    echo ""
    composer install --no-dev --working-dir="${tmp_build_dir}"

    echo ""
    echo_step "Removing composer files"
    rm -rf "${tmp_build_dir}/composer.json" "${tmp_build_dir}/composer.lock"
}

#######################################
# Build the plugin code to a subdir named
# as the plugin name in the dist dir and
# pack the folder in a zip file stored
# in the dist dir, by default.
# Globals:
#   dist_path
#   plugin_name
#   plugin_version
# Outputs:
#   Step messages.
#######################################
pack_built_dir() {
    zip_path="${dist_path}/${plugin_name}-${plugin_version}.zip"
    echo_step "Removing old zip file, if exists"
    rm -f "${zip_path}"
    pushd "${dist_path}" > /dev/null 2>&1
    echo_step "Creating the zip file on dist/${plugin_name}-${plugin_version}.zip"
    zip -qr "${zip_path}" ./${plugin_name}
    popd > /dev/null 2>&1
}

#######################################
# Show the elapsed time since the script started.
# Globals:
#   start_time
# Outputs:
#   The runtime in seconds.
#######################################
show_time() {
    end_time=$(date +%s)
    runtime=$((end_time-start_time))
    echo ""
    echo "Runtime $runtime sec"
}

#######################################
# Repeats a string "n" times.
# Arguments:
#   The string to be repeated.
#   The number of times to repeat.
# Outputs:
#   The repeated string.
#######################################
repeat(){
	for (( c=1; c<="${2}"; c++ ))
    do
        echo -n "${1}"
    done
}

#######################################
# Show the header for the script, showing
# a few details of the plugin.
# Globals:
#   script_version
#   plugin_name
#   plugin_version
# Outputs:
#   The formatted header.
#######################################
echo_header() {
    repeat "=" $cols
    line=$(repeat "-" $(($cols-16)))
    echo "      __"
    echo "   -=(o '.      PUBLISHPRESS PLUGIN BUILDER - v${script_version}"
    echo "     '.-.\      ${line}"
    echo "     /|  \\      Name: ${plugin_name}"
    echo "     '|  ||     Slug: "
    echo "      _\_):,_   Version: ${plugin_version}"
    echo ""
    repeat "=" $cols
    echo ""
}

#######################################
echo_header
case "${command}" in
    "build-dir")
        echo "Building to dist dir:"
        echo ""
        build_to_dir
        echo ""
        echo "Plugin successfully built to the dist dir!"
        show_time
        ;;
    "build")
        echo "Building to zip file:"
        echo ""
        build_to_dir
        pack_built_dir
        echo ""
        echo "Plugin successfully built to a zip file!"
        show_time
        ;;
    "clean")
        echo "Cleaning directory on dist dir:"
        echo ""
        clean_dist
        ;;
    *)
        echo "invalid option ${command}"
        ;;
esac
