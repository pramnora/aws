Created: Sat 17 Sep 2022 03:16 AM GMT  
Updated: Sat 17 Sep 2022 15:00 PM GMT

-----

I created this bucket:  

> pmr-public-1  

...which contains the following 2 folders:   

- webpages  (stores 1 x web page: index.html/with internal header stylesheet)      
- websites  (stores 1 x web site: index.html, together with externally linked: 6 x .html web pages/5 x including index.html/plus, 1 .css file)      

...just a few day's back; with the intention to serve web pages up from there.    
 
-----  
 
Single web page retrieval works perfectly fine.  

- https://pmr-public-1.s3.eu-west-2.amazonaws.com/webpages/001/index.html?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCWV1LXdlc3QtMiJGMEQCIEx7HR42sQCTcG7pyzUWhJEYTpc3bRajH2JzWp7B1qxUAiAgkcG68Sv6sH2%2BIIwnRmaxN4lJt3A%2Bjl%2BLM51orWfbzSqeAgj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAQaDDIyMjcwMzMxODEwOCIMXBZOn56i9mo%2B0sLHKvIBC%2Be0yeUuM%2Bz3pOBiZB%2FvRL06izSW6L8Y0hifrAYoI%2FbtG%2FvT8nUiyGBVbtGINrPnkptRmHDOftxwuaKB1GPmJuXItQoGZAzKnQmboobSGv7nzaGYYnyqRVWJyhshpPrvFBUQx8qWhnVMOaiYsmXkWJ5n94SiTC%2FVX%2FG%2FDbGHtrEk3%2Bqa81HZDMrzAj7adqXJeBRVM5l60uCcbm%2FBqpNUYKi5q12wq5qw2I%2FUw4tFfmqX0S73n2efNmFsIKsqqS67SBmaXiLwtSMf9YHy%2F5j66Op%2BDtZCPD%2FU0prwo6E5OyNKIf1JXuG5zv7j8ZZvUySz8qcwhbyUmQY64AHgSLkSqDyMCh8s4F0r8vLMqaLF54XRIfVI1VwPSt3o46vz7MRWCFdGaHENJyT72ksSWfLlH%2BkXavor%2FbRZu4cX0B4OZbNH4bXLT5DJBhzloBDXkHh06xjZi9RR8giLPwV7QrwoCFc%2Fq8%2FMKXklIap2J1OpPiUcrYyAMNwBpIR8vzEGXtF7TRnrKxm07%2BR79mJBrjXPTRwN1RuAedgWM7HqpXrYjmyae1RmWPiQRQxZ3Q2kfNVk0qsJqy%2F2%2BNfteT3EEJ8Yq77xb1jI%2FoUUZSXx4abdznY9WgnjY3T8Vqo1HQ%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220917T025429Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIATHWRG6ROIOPDPGU2%2F20220917%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Signature=da5714218226dc16682619ea7cbad5dbd6ff371a5d7e8a6b5cab6ef910bd70b6  

-----  

However, when I tried breaking up the pages into being a series of separate 'linked' files';    

css.01    

/-etc. I found that none of the links were, actually, working...?    
Meaning, the index.html page...did NOT retrieve the .css stylesheet;  
nor would it retrieve any linked to web page, neither.  

- https://pmr-public-1.s3.eu-west-2.amazonaws.com/websites/001/index.html?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCWV1LXdlc3QtMiJGMEQCIEx7HR42sQCTcG7pyzUWhJEYTpc3bRajH2JzWp7B1qxUAiAgkcG68Sv6sH2%2BIIwnRmaxN4lJt3A%2Bjl%2BLM51orWfbzSqeAgj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAQaDDIyMjcwMzMxODEwOCIMXBZOn56i9mo%2B0sLHKvIBC%2Be0yeUuM%2Bz3pOBiZB%2FvRL06izSW6L8Y0hifrAYoI%2FbtG%2FvT8nUiyGBVbtGINrPnkptRmHDOftxwuaKB1GPmJuXItQoGZAzKnQmboobSGv7nzaGYYnyqRVWJyhshpPrvFBUQx8qWhnVMOaiYsmXkWJ5n94SiTC%2FVX%2FG%2FDbGHtrEk3%2Bqa81HZDMrzAj7adqXJeBRVM5l60uCcbm%2FBqpNUYKi5q12wq5qw2I%2FUw4tFfmqX0S73n2efNmFsIKsqqS67SBmaXiLwtSMf9YHy%2F5j66Op%2BDtZCPD%2FU0prwo6E5OyNKIf1JXuG5zv7j8ZZvUySz8qcwhbyUmQY64AHgSLkSqDyMCh8s4F0r8vLMqaLF54XRIfVI1VwPSt3o46vz7MRWCFdGaHENJyT72ksSWfLlH%2BkXavor%2FbRZu4cX0B4OZbNH4bXLT5DJBhzloBDXkHh06xjZi9RR8giLPwV7QrwoCFc%2Fq8%2FMKXklIap2J1OpPiUcrYyAMNwBpIR8vzEGXtF7TRnrKxm07%2BR79mJBrjXPTRwN1RuAedgWM7HqpXrYjmyae1RmWPiQRQxZ3Q2kfNVk0qsJqy%2F2%2BNfteT3EEJ8Yq77xb1jI%2FoUUZSXx4abdznY9WgnjY3T8Vqo1HQ%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220917T031437Z&X-Amz-SignedHeaders=host&X-Amz-Expires=299&X-Amz-Credential=ASIATHWRG6ROIOPDPGU2%2F20220917%2Feu-west-2%2Fs3%2Faws4_request&X-Amz-Signature=b78fe883d3f853adb63e3d673b4596c5ff48fd155a338ab6f842cea378ecb34f  

**NOTE**: This 2nd link doesn't tend to stay up much too long.     
I think, it's time locked...meanking when a certain amount of time runs out;    
then, the server no longer let's you view the page, anymore.     
-(Also, only [index.html] is actually visible. All other files are shows as XML error message, instead.)-  

That is that say whenever I tried typing in the Amazon assigned web site URL adress...;     
the linked part did NOT show...; and, whenever I tried to access these resources on an individual basis...;     
all that got displayed back was a similar worded XML document...?!     

> <Error>  
> <Code>AccessDenied</Code>  
> <Message>Access Denied</Message>  
> <RequestId>AS0DGAEBFFNHPDWH</RequestId>  
> <HostId>tZgHkgScBIyzAHG21hSXYFOg8TzpePIE08/gvWYeIc4fYonXSlU6NxrKvWMyOBKrDkMAQ8gJ0Gw=</HostId>  
> </Error>  

Quite obviously, I must have left off some setting which is used to make all linked web pages/too, CSS public;    
but, right now, I really don't know how to go about correcting this...?   
At some future point I will have to try doing this exercise, again.  

-----  

I decided to leave up there 2 buckets I went and created just a few days back...   

> pmr-private-1   (stores 1 x .txt file)    
> pmr-public-1    (stores 6 x .html files/1 x .css file) 

...Why? Because, I don't think Amazon is charging me very much to use these services;      
if I had a lot of pages...and, was continually retrieving them...;    
then, the charges, I bet, would be that much more...?!  


