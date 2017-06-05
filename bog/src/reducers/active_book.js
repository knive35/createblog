
/**
 * Created by kamesh on 2/6/17.
 */
export default function (state=null, action ) {
    switch (action.type){
        case "BOOK_SELECTED":
            return action.payload;
    }
    //base case
    return state;
    
}