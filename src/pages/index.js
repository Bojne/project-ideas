import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => ( < Layout >
    <
    h1 > Hi!This is interesting ideas in my brain. < /h1>  <
    p > Who am I ? Check out my < a href = "https://bojne.github.io" > personal website < /a></p >
    <h3>Ideas list:</h3>
    <
    ul >
    <
    li > Stayinmydorm - Connecting Minerva, Stanford and Berkley students throught overnight stay in dorms. < /li> <
    li > Connect RH - Connecting Minerva Residential Hall Common room through video stream. < /li> <
    li > Green Scan - A Computer Vision mobile app that scan my writing on LCD digital writing board. < /li> <
    li > Street Art SF - A website collecting SF street art. < /li >  < /
    ul > <
    p > Email me
    if you are interested to work on these ideas together, or
    if you got any comments! < /p> <
    p > yhhuang @minerva.kgi.edu < /p>

    <
    Link to = "/page-2/" > Go to page 2 < /Link> < /
    Layout >
)

export default IndexPage