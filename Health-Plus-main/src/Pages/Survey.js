import React from 'react';
import {form} from 'bootstrap';

function Survey() {
  return (
    <div class="row">

    <h1>Survey Form</h1>
    <form class="form-horizontal">
  {/* <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control w" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div> */}
  <div class=" form-group ">
    <label for="" class="form-label">Name</label>
    <div class="col-sm-10">
    <input type="text" class="col-2 form-control " id="exampleInputEmail1" aria-label="Name"/>
    </div>
    
    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div class="form-group">
    <label for="" class="form-label">Age</label>
    <input type="number" class="form-control" id=""/>
  </div>

  <div class="col">
    <label for="" class="form-label">Choose your dietary choice</label>
  </div>
  {/* <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}

<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Jain
  </label>
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Veg
  </label>
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Non Veg
  </label>
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
</div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}
export default Survey