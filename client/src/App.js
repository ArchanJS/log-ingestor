import axios from 'axios';
import { useState, useEffect } from 'react';
import Table from './Table';

const App = () => {
  const [logData, setLogData] = useState([]);
  const [searchData, setSearchData] = useState('');
  const [searchKey, setSearchKey] = useState('level');
  const [searchFields,setSearchFields] = useState({});
  const fetchData = async () => {
    try {
      let url='http://localhost:3000';
      let queryKeys=Object.keys(searchFields);
      if(queryKeys.length > 0){
        // url=url+`?${searchKey}=${searchData}`;
        let extraUrl='';
        queryKeys.forEach((qk)=>{
          if(!extraUrl.length) extraUrl+=`?${qk}=${searchFields[qk]}`;
          else extraUrl+=`&${qk}=${searchFields[qk]}`;
        });
        if(extraUrl.length) url+=extraUrl;
      }
      const { data } = await axios.get(url);
      setLogData(data);
      setSearchData('');
    } catch (err) {
      console.log(err);
    }
  }

  const addField = ()=>{
    let obj={...searchFields};
    obj[searchKey]=searchData;
    setSearchFields(obj);
    setSearchData('');
  }

  const deleteField = (key)=>{
    let obj = {...searchFields};
    delete obj[key];
    setSearchFields(obj);
  }


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>

      <div className="form-container">
      <label htmlFor="newDropdown">Select field</label>
      <select
        id="newDropdown"
        value={searchKey}
        onChange={(e) => setSearchKey(e.target.value)}
      >
        <option value="level">Level</option>
        <option value="message">Message</option>
        <option value="resourceId">Resource ID</option>
        <option value="timestamp">Timestamp</option>
        <option value="traceId">Trace ID</option>
        <option value="spanId">Span ID</option>
        <option value="commit">Commit</option>
        <option value="parentResourceId">Parent Resource ID</option>
      </select>
        <input
          type="text"
          id="newField"
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
          placeholder="Enter value"
        />

<button className="submit-button" onClick={addField}>
          Add
        </button>

        <ul className='search-params'>
          {
            Object.keys(searchFields).length>0 && Object.keys(searchFields).map((key,idx)=>{
              return <li 
              key={idx} 
              className='tags'
              onClick={()=>{
                deleteField(key);
              }} 
              >{key} : {searchFields[key]} {'  '} <strong>X</strong></li>;
            })
          }
        </ul>

        <button className="submit-button" onClick={fetchData}>
          Search
        </button>
      </div>
      <h1 style={{
        textAlign:'center'
      }}>{logData.length} results found</h1>
      {
        logData.length > 0
        &&
        logData.map((log, idx) => {
          return <Table
            key={log._id}
            id={idx + 1}
            level={log.level}
            message={log.message}
            resourceId={log.resourceId}
            timestamp={log.timestamp}
            traceId={log.traceId}
            spanId={log.spanId}
            commit={log.commit}
            parentResourceId={log.metadata.parentResourceId}
          />
        })
      }
    </>
  )
}

export default App;