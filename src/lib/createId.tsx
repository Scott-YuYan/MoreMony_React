let id = 0;//标签栏的自增Id
const createId = ():number => {
    id += 1;
    return id;
}

export default createId;