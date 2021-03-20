import subscriptions from '../data/subscriptions';
import { processSubscriptions } from '../actions/subscriptions';

export default (state = processSubscriptions(subscriptions), action) => {
    switch (action.type) {
        case 'REPLACE_VARIABLES':
            return processSubscriptions(action.subscriptions);
        default: 
            return state;
    }
}