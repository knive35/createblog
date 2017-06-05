
/**
 * Created by kamesh on 2/6/17.
 */
export function selectBook(book) {
    return(
        {
            type:"BOOK_SELECTED",
            payload:book
        }
    );

}