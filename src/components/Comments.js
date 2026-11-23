import React, { useState } from 'react'


export const Comments = () => {
  const data =[
    {
      id : 1,
      userName: "Urmila Dubhase",
      text: "Hello welcome to the comment section",
      replies: [
        {
          id : 1,
      userName: "Urmila Dubhase",
      text: "Hello welcome to the comment section"
        }

      ]
    },

  ];
  const [comments, setComments] = useState(data);
  console.log(setComments);

  return (
    <div>{comments.map((e) =>(
    <div key={e.id}>
        {e.userName}
        <p>{e.text}</p>
      </div>
      ))}
    </div>
  )
}
