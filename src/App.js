import './App.css';
import Button from './Components/button';

function App() {

  return (
    <div className="App">
      <div>
        <p>{'<Button />'}</p>
      <Button />
      </div>

      <div>
        <p>{"<Button variant=”outline” />"}</p>
      <Button variant='outline' />
      </div>

      <div>
        <p>{"<Button variant=”text” />"}</p>
      <Button variant='text' />
      </div>

      <div>
      <p>{"<Button disableShadow />"}</p>
      <Button disableShadow color='primary'/>
      </div>

      <div className='displayFlex'>
        <div>
        <p>{"<Button disabled />"}</p>
      <Button disabled />
      </div>
      <div>
      <p>{"<Button variant=”text” disabled />"}</p>
      <Button variant='text' disabled />
      </div>
      </div>

      <div className='displayFlex'>
        <div>
        <p>{'<Button startIcon=”local_grocery_store” />'}</p>
      <Button startIcon='local_grocery_store' />
      </div>
      <div>
      <p>{'<Button endIcon=”local_grocery_store” />'}</p>
      <Button endIcon='local_grocery_store' />
      </div>
      </div>

      <div className='displayFlex'>
        <div>
        <p>{'<Button size=”sm” />'}</p>
      <Button size='sm' color='primary'/>
      </div>
      <div>
      <p>{'<Button size=”md” />'}</p>
      <Button size='md' color='primary'/>
      </div>
      <div>
      <p>{'<Button size=”lg” />'}</p>
      <Button size='lg' color='primary'/>
      </div>
      </div>


      <div className='displayFlex'>
        <div>
        <p>{'<Button color=”default” />'}</p>
      <Button color='default'/>
      </div>
      <div>
      <p>{'<Button color=”primary” />'}</p>
      <Button color='primary'/>
      </div>
      <div>
      <p>{'<Button color=”secondary” />'}</p>
      <Button color='secondary'/>
      </div>
      <div>
      <p>{'<Button color=”danger” />'}</p>
      <Button color='danger'/>
      </div>
      </div>
      <footer>created by Olayinka Atobiloye - devChallenges.io</footer>
    </div>

    
  );


}

export default App;
