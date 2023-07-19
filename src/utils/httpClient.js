const API ="https://api.themoviedb.org/3";

export function get(path) {

    return fetch(API+path,{
          headers:{
          Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDY0ZjI3OTliZjIzOTM1MDgxODE0OTU2ZDZjOWZiOSIsInN1YiI6IjYzNzY3NGE4ZmFiM2ZhMDBiNGQwM2VmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gNnNvdsG-yFhXZ6gYhoYC_miKr8_0wDSohfB8E-_fT8",
          'Content-Type':"application/json;charset=utf-8",
        },
      }).then( (result) => result.json());
    }
