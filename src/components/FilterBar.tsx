import './FilterBar.css'
export default function FilterBar() {
    return (
        <div className="filter-bar">
            <div className="filters">
                <button className="filter-btn active">All</button>
                <button className="filter-btn">Completed</button>
                <button className="filter-btn">Pending</button>
            </div>
            <div className="sort">
                <label htmlFor="sort-select">Sort by:</label>
                <select id="sort-select">
                    <option value="date">Date</option>
                    <option value="title">Title</option>
                </select>
            </div>
        </div>
    )
}