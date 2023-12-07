import { FutureActionPanel, SelectControl } from '.';
import { getElementByName } from '../utils';

export const FutureActionPanelBulkEdit = (props) => {
    const { useSelect, useDispatch, select } = wp.data;

    const onChangeData = (attribute, value) => {
        getElementByName('future_action_bulk_enabled').value = select(props.storeName).getEnabled() ? 1 : 0;
        getElementByName('future_action_bulk_action').value = select(props.storeName).getAction();
        getElementByName('future_action_bulk_date').value = select(props.storeName).getDate();
        getElementByName('future_action_bulk_terms').value = select(props.storeName).getTerms().join(',');
        getElementByName('future_action_bulk_taxonomy').value = select(props.storeName).getTaxonomy();
    }

    const date = useSelect((select) => select(props.storeName).getDate(), []);
    const enabled = useSelect((select) => select(props.storeName).getEnabled(), []);
    const action = useSelect((select) => select(props.storeName).getAction(), []);
    const terms = useSelect((select) => select(props.storeName).getTerms(), []);
    const taxonomy = useSelect((select) => select(props.storeName).getTaxonomy(), []);
    const changeAction = useSelect((select) => select(props.storeName).getChangeAction(), []);

    const {
        setChangeAction
    } = useDispatch(props.storeName);

    let termsString = terms;
    if (typeof terms === 'object') {
        termsString = terms.join(',');
    }

    const handleStrategyChange = (value) => {
        setChangeAction(value);
    };

    const options = [
        { value: 'no-change', label: props.strings.noChange },
        { value: 'change-add', label: props.strings.changeAdd },
        { value: 'add-only', label: props.strings.addOnly },
        { value: 'change-only', label: props.strings.changeOnly },
        { value: 'remove-only', label: props.strings.removeOnly },
    ];

    const optionsToDisplayPanel = ['change-add', 'add-only', 'change-only'];

    return (
        <div className={'post-expirator-panel'}>
            <SelectControl
                label={props.strings.futureActionUpdate}
                name={'future_action_bulk_change_action'}
                value={changeAction}
                options={options}
                onChange={handleStrategyChange}
            />

            {optionsToDisplayPanel.includes(changeAction) && (
                <FutureActionPanel
                    context={'bulk-edit'}
                    autoEnableAndHideCheckbox={true}
                    postType={props.postType}
                    isCleanNewPost={props.isNewPost}
                    actionsSelectOptions={props.actionsSelectOptions}
                    enabled={true}
                    calendarIsVisible={false}
                    action={action}
                    date={date}
                    terms={terms}
                    taxonomy={taxonomy}
                    taxonomyName={props.taxonomyName}
                    onChangeData={onChangeData}
                    is12Hour={props.is12Hour}
                    startOfWeek={props.startOfWeek}
                    storeName={props.storeName}
                    strings={props.strings} />
            )}

            {/* Bulk edit JS code will save only fields with name inside the edit row */}
            <input type="hidden" name={'future_action_bulk_enabled'} value={enabled ? 1 : 0} />
            <input type="hidden" name={'future_action_bulk_action'} value={action} />
            <input type="hidden" name={'future_action_bulk_date'} value={date} />
            <input type="hidden" name={'future_action_bulk_terms'} value={termsString} />
            <input type="hidden" name={'future_action_bulk_taxonomy'} value={taxonomy} />
            <input type="hidden" name={'future_action_bulk_view'} value="bulk-edit" />
            <input type="hidden" name={'_future_action_nonce'} value={props.nonce} />
        </div>
    );
};
