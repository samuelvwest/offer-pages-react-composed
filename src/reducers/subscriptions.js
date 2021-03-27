import subscriptions from '../data/subscriptions';
// import { processSubscriptions } from '../actions/subscriptions';

export default (state = subscriptions, action) => {
    switch (action.type) {
        case 'REPLACE_SUBSCRIPTIONS':
            return action.subscriptions;
        default: 
            return state;
    }
}