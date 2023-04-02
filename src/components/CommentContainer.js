import React from 'react';
import CommentList from './CommentList';

const commentData = [
    {
        id: 1,
        name: "Anamika Saini",
        desc: "Lorem ipsum is the best thing the world",
        reply: [
            {
                name: "priyanka",
                desc: "yes this is right",
                reply: [
                    {
                        name: "Anamika Saini",
                        desc: "ya",
                        reply: [],
                    }
                ],
            },
            {
                name: "Ankit Yadav",
                desc: "This is one of the best playlist",
                reply: [  {
                    name: "Ashu",
                    desc: "i will agree on this, what's other guys",
                    reply: [ {
                        name: "Anamika Saini",
                        desc: "Me also...hahahahha",
                        reply: [ {
                            name: "Rohit",
                            desc: "Education is the key of success",
                            reply: [],
                        }],
                    }],
                },
                {
                    name: "Ashu",
                    desc: "Entrepreneurship generation",
                    reply: [],
                }
            ],
            }
        ],
    },
        {
            id: 2,
            name: "Ashi Singh",
            desc: "Lorem ipsum is the best thing the world",
            reply: [
    
            ],
        },
       
        {
            id: 3,
            name: "Rohitin",
            desc: "key chamges.......yes jncsjd dcks dsci dsnck",
            reply: [
    
            ],
        },
        {
            id: 4,
            name: "Anamika Saini",
            desc: "Lorem ipsum is the best thing the world",
            reply: [
    
            ],
        },
]
const CommentContainer = () => {
  return (
    <div className='w-[900px]'>
      <h1 className='text-bold'>Comments</h1>
      <CommentList comments={commentData}/>
    </div>
  )
}

export default CommentContainer
