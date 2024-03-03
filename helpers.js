//You can add and export any helper functions you want here. If you aren't using any, then you can just leave this file as is.

function checkId(id) {
    if(!id) {
        throw new Error("id not provided.");
    }
    if(typeof id !== "string") {
        throw new Error("id is not a string.");
    }
    id = id.trim();
    if(id.length === 0) {
        throw new Error("id can't be an empty string or spaces.");
    }

    return id;
};

export {checkId}