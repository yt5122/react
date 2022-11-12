import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

export const AddTutorial = () => {
    var {
        register,
        handleSubmit,
        formState: { errors },import React from 'react';
      } = useForm();
import { useForm } from "react-hook-form";
import axios from 'axios';
    

export const AddTutorial = () => {
      const submit = async(data)=>{
    var {
        console.log(data);
        register,
        await axios.post("https://tutorialapi1.herokuapp.com/tutorial",data).then(res=>{
        handleSubmit,
    
        formState: { errors },
            if(res.status===201){
      } = useForm();
              alert("Tutorial Add Successfully")
    
            }
      const submit = async(data)=>{
    
        console.log(data);
        }).catch(err=>{
        await axios.post("https://tutorialapi1.herokuapp.com/tutorial",data).then(res=>{
            console.log(err);
    
        })
            if(res.status===201){
      }
              alert("Tutorial Add Successfully")
    
            }
    
    
  return (
        }).catch(err=>{
    <div>
            console.log(err);
    <form onSubmit = {handleSubmit(submit)}>
        })
    <div class="form-group">
      }
        <label for="exampleInputEmail1">title</label>
    
        <input
    
          type="text"
  return (
          class="form-control"
    <div>
          id="exampleInputEmail1"
    <form onSubmit = {handleSubmit(submit)}>
          placeholder="Enter title"
    <div class="form-group">
          {...register("title")}
        <label for="exampleInputEmail1">title</label>
          
        <input
        />
          type="text"
      </div>
          class="form-control"
      <div class="form-group">
          id="exampleInputEmail1"
        <label for="exampleInputEmail1">description</label>
          placeholder="Enter title"
        <input
          {...register("title")}
          type="text"
          
          class="form-control"
        />
          id="exampleInputEmail1"
      </div>
          placeholder="Enter desc"
      <div class="form-group">
          {...register("description")}
        <label for="exampleInputEmail1">description</label>
        />
        <input
      </div>
          type="text"
      <div class="form-group">
          class="form-control"
        <label for="exampleInputEmail1">fees</label>
          id="exampleInputEmail1"
        <input
          placeholder="Enter desc"
          type="integer"
          {...register("description")}
          class="form-control"
        />
          placeholder="Enter fees"
      </div>
          {...register("fees")}
      <div class="form-group">
        />
        <label for="exampleInputEmail1">fees</label>
      </div>
        <input

          type="integer"
      <div class="form-group">
          class="form-control"
        <label for="exampleInputEmail1">published</label>
          placeholder="Enter fees"
        <input
          {...register("fees")}
          type="boolean"
        />
          class="form-control"
      </div>
          id="exampleInputEmail1"

          
      <div class="form-group">
          placeholder="Enter published"
        <label for="exampleInputEmail1">published</label>
          {...register("published")}
        <input
        />
          type="boolean"

          class="form-control"
      </div>
          id="exampleInputEmail1"

          
      <button type="submit" class="btn btn-primary">
          placeholder="Enter published"
        Submit
          {...register("published")}
      </button>
        />
    </form>

  </div>
      </div>
);

};
      <button type="submit" class="btn btn-primary">

        Submit
      </button>
    </form>
  </div>
);
};
