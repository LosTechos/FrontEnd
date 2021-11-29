
const UseGetDebs = async (id) => {


    const getData = async (id) => {

        const res = await fetch(`https://los-techos.herokuapp.com/api/house/${id}`, {
            headers: {
                'access-token': localStorage.getItem("access-token")
            }
        })

        const data = await res.json();

        return data

    }

    const data = await getData(id);
    return data


}
export default UseGetDebs