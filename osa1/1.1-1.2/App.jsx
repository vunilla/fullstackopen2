const Kurssi = () => {
  return (
    <div>
      <p>FullStackOpen</p>
    </div>
  )
}

const Sisalto = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Osassa {props.osa} on {props.tehtava} tehtävää.
      </p>
    </div>
  )
}

const Yht = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Yhteensä tehtäviä on {props.tehtava}.
      </p>
    </div>
  )
}

const App = () => {
  const kurssi = 'FullStackOpen'
  const osa1 = '"Reactin perusteet"'
  const tehtava1 = 14
  const osa2 = '"Palvelimen kanssa tapahtuva kommunikointi"'
  const tehtava2 = 20
  const osa3 = '"Palvelimen ohjelmointi NodeJS:n Express-kirjastolla"'
  const tehtava3 = 22



  return (
    <div>
      <h1>{kurssi}</h1>
      <p>
      <Sisalto osa={osa1} tehtava={tehtava1}/>
      </p>
      <p>
      <Sisalto osa={osa2} tehtava={tehtava2}/>
      </p>
      <p>
      <Sisalto osa={osa3} tehtava={tehtava3}/>
      </p>
      <p>
        <Yht tehtava={tehtava1 + tehtava2 + tehtava3}/>
      </p>
    </div>
  )
}

export default App