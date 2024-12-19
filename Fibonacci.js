function fibonacciGenerator (n) {

    var A=[n];
    
    if(n===1)
    {
        A[0]=0;
        return(A);
    }
    
    else if(n===2)
    {
        A[0]=0;
        A[1]=1;
        return(A);
    }
    else{
        var i=2;
        A[0]=0;
        A[1]=1;
        while(i<n)
        {
            A[i]=A[i-1]+A[i-2];
            i++;
        }
        return(A);
    }
    

}

