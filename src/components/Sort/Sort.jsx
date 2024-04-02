import React from 'react'

const Sort = () => {
  return (
    <div className='sort-container'>
      <aside>
        <ul>
          <li><button>sort <strong>alphabetically</strong></button></li>
          <li><button>sort by <strong>price</strong></button></li>
          <li><button>sort by <strong>star rating</strong></button></li>
        </ul>
      </aside>
    </div>
  )
}

export default Sort