import JSONDATA from "./cities.json"

function SearchFilter({ location, setLocation, setIsSearch }) {

    return (
        <div className={"search-filter"}>
            {location && JSONDATA.filter(value => {
                if (value.city.toLowerCase().includes(location.toLowerCase())) {
                    return value
                } else {
                    return null
                }
            }).map(item => {
                return (
                    <li
                        className="search-item"
                        key={item.city}
                        onClick={(e) => {
                            setLocation(e.target.innerHTML)
                            setIsSearch(false)
                        }}
                    >
                        {item.city}
                    </li>
                )
            })}
        </div>
    )
}

export default SearchFilter