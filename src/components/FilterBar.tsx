import './FilterBar.css'

interface FilterBarProps {
    type: string,
    filterTask: (type: string) => void
    sortTask : (type : string) => void
}

export default function FilterBar({ type, filterTask , sortTask}: FilterBarProps) {

    function handleSort(e) {
      sortTask(e.target.value)
    }
    return (
        <div className="filter-bar">
            <div className="filters">
                <button
                    onClick={() => filterTask('all')}
                    className={`filter-btn ${type === 'all' ? 'active' : ''} `}>All</button>
                <button
                    onClick={() => filterTask('completed')}
                    className={`filter-btn ${type === 'completed' ? 'active' : ''} `}>Completed</button>
                <button
                    onClick={() => filterTask('pending')}
                    className={`filter-btn ${type === 'pending' ? 'active' : ''} `}>Pending</button>
            </div>
            <div className="sort">
                <label htmlFor="sort-select">Sort by:</label>
                <select onChange={handleSort} id="sort-select">
                    <option value="date">Date</option>
                    <option value="title">Title</option>
                </select>
            </div>
        </div>
    )
}