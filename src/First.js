export default function First() {
  return(
  <div>
    <h1 className="ee">welcome to the world of React js</h1>
    <button>
      <a
        href="https://github.com/codesgauravcom"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        github{" "}
      </a>
    </button>

    <dl className="bb">
      <dt>profile</dt>
      <dd>python</dd>
      <dt>Profile</dt>
      <dd>java</dd>
    </dl>

    <table border={2}>
      <tr>
        <th className="ff" colSpan={6}>
          Employee details
        </th>
      </tr>
      <tr className="sm">
        <th>Name</th>
        <th>Profile</th>
        <th>Email</th>
        <th>Contact</th>
        <th>Address</th>
        <th>Salary</th>
      </tr>
      <tr className="sm">
        <td>ankush</td>
        <td>java</td>
        <td>ankush@gmail.com</td>
        <td>9876543210</td>
        <td>dwarka</td>
        <td>20k</td>
      </tr>
      <tr className="sm">
        <td>marry</td>
        <td>python</td>
        <td>marry@gmail.com</td>
        <td>9876543210</td>
        <td>dwarka</td>
        <td>20k</td>
      </tr>
      <tr className="sm">
        <td>lana</td>
        <td>dot net</td>
        <td>lana@gmai.com</td>
        <td>9876543210</td>
        <td>dwarka</td>
        <td>20k</td>
      </tr>
      <tr className="sm">
        <td>lana</td>
        <td>dot net</td>
        <td>lana@gmai.com</td>
        <td>9876543210</td>
        <td>dwarka</td>
        <td>20k</td>
      </tr>
      <tr className="sm">
        <td>lana</td>
        <td>dot net</td>
        <td>lana@gmai.com</td>
        <td>9876543210</td>
        <td>dwarka</td>
        <td>20k</td>
      </tr>
      <tr className="sm">
        <td>lana</td>
        <td>dot net</td>
        <td>lana@gmai.com</td>
        <td>9876543210</td>
        <td>dwarka</td>
        <td>20k</td>
      </tr>
      <tr className="sm">
        <td>lana</td>
        <td>dot net</td>
        <td>lana@gmai.com</td>
        <td>9876543210</td>
        <td>gurugram</td>
        <td>50k</td>
      </tr>
    </table>

    <ul type>
      <li>coffee</li>
      <li>juice</li>
      <li>milk</li>
    </ul>
    <ol>
      <li>coffee</li>
      <li>juice</li>
      <li>milk</li>
    </ol>
  </div>
  );
}
