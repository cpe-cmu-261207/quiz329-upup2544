//a component for rendering person table

export default function ItemTable(props) {
  return (
    <div>
      <table className="table is-bordered mb-3">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Cancel</th>
          </tr>
          <tr>
            <td>{props.name}</td>
            <td>{props.gender}</td>
            <td>{props.age}</td>
            <td>
              <button onClick={() => props.del(props.name)}> x </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
