export const trancateStr = (str,lengthNum, trancateNum) => {
    return str && str.length > lengthNum ? str.slice(0, trancateNum)+ '...' : str
    
}