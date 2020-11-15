export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    discover_weekly:null,
    //token: "BQD674zXGo_REl1WBcb2M4J_cnFPPJpr2a6VeXX4_Mw1TRbOWApjuuqRKJDCPFlN4ZQg0MIJhKpdCLN-HnQODpHLwOpGMeE-7KOrWFFltdKfIdW1cLvlFUkcASm1ExBozKQGo2eQ633Fc2tosWWDsYRGyLWcE7f-pw",
}

const reducer = (state, action ) => {
    console.log(action);

    // Action -> type, [payload]

    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            }
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            }

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            }

        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }

        default:
            return state;

    }

}

export default reducer;