function isEmptyObj(obj)
{
    for(let key in obj)
    {
        return false;
    }
    return true;
}
obj.user={};
console.log(isEmptyObj(obj));