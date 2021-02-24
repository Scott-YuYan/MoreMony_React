let id = parseInt(window.localStorage.getItem("maxId") || '0');//标签栏的自增Id
const createId = (): number => {
    id += 1;
    window.localStorage.setItem("maxId", JSON.stringify(id));
    return id;
}

export default createId;