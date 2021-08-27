\begin{verbatim}

#All positive edges in columns have a 1 and -1 entry. Standardize makes any 
#positive edge column have the 1 come before the -1 when reading the column 
#top to bottom. All negative edges in columns have two 1 entries or two -1 entires. 
#Standardize makes any negative edge column have two 1s. Negative loops have
# one 1 or -1 non-zero entry in it's edge column. Standardize makes all negative loop 
#columns have one 1. Standardizing our edges into one convention makes finding a positive 
#edge to delete-contract more efficient. 
def standardize(G):
    G_rows=G.nrows()
    G_cols=G.ncols()
    for j in range(0,G_cols):
        for i in range(0,G_rows):
            if G[i,j] == 1:
                break
            if G[i,j] == -1:
                G.add_multiple_of_column(j,j,-2)
                break
    return G

#If there is a muti-edge in the peterson graph, meaning a column is repeated, then 
#delete the column and return a new incidence matrix.
def check(Gin):
    G=standardize(Gin) #
    G_cols=G.ncols() 
    G_rows=G.nrows()
    l=G.columns()
    for i in range(0,G_cols-1):
        for j in range(i+1,G_cols):
            if G.column(G_cols-1-i)== G.column(G_cols-1-j):
                l.pop(G_cols-1-i)
                break
    B=matrix(l)
    C=B.transpose()
    return C



#Returns an ordered pair of the incidence matrix of the graph with an edge
# deleted and the incidence matrix of the graph with an edge contracted. 
def DC(G):
    rows=G.nrows()
    cols=G.ncols()
    #If a single edge, return an empty graph with the same number of vertices for 
    #the graph with the edge deleted. return an empty graph with one 
    #less vertex for the graph with the edge contracted.
    if cols == 1:           
        C=matrix(QQ,rows,1,range(0))
        H=matrix(QQ,rows-1,1,range(0))
        return (C,H)
    #Else, find the first positive edge in the matrix when reading the matrix
    # from left to right. Delete and contract this edge returning new incidence matrices.
    else:
        j=0
        #Increment through the columsn looking for a positive edge
        while j<cols:
            sum=0
            for i in range(0,rows):
                sum = G[i,j] + sum
        
            #If the non-sero entires in the column add to zero, this is a positive edge. 
             #Delete it.
            if sum == 0:
                    delete_col=j
                    break
            j=j+1

        #If we found a positive edge then j will not be the number of columns in the incidence 
        #matrix and we have deleted a column from the matrix. Create a new incidence matrix 
         #without this column sotred in D, D represents a new graph with an edge deleted.
        if j != cols:
            l=G.columns()
            l.pop(delete_col)
            B=matrix(l)
            C=B.transpose()
            D=B.transpose()
            #Use this incidence matrix to contract an edge. 
             #This is done by adding together the two 
             #rows which contained the deleted  column's non-zero entries 
             #creating a new incidence matrix H2.
            r1found = false
            for k in range(0,rows):
                if G[k,delete_col]!=0:
                    if r1found == false:
                        r_1=k
                        r1found = true
                    else:
                        r_2=k
	    C.add_multiple_of_row(r_2,r_1,1)
            for p in range(0,cols-1):
                if abs(C[r_2,p])==2:
                    C[r_2,p]=1
            F=C.rows()
            F.pop(r_1)
            H=matrix(F)
            H1=check(H)
            D1=standardize(D)
            H2=standardize(H1)
            return (D1,H2)
           
        #If there was no positive edge in the matrix, then there exists a negative loop. 
        #Delete Contract the negative loop.        
        if j==cols:
            return c_neg_loop(G)

#Returns an ordered pair of the incidence matrix of the graph with a negative loop deleted 
#and the incidence matrix of the graph with a negative loop contracted. 
def c_neg_loop(G):
    G_rows=G.nrows()
    G_cols=G.ncols()
    E=G
    for j in range(0,G_cols):
        sum = 0
        for i in range(0,G_rows):
            sum=G[i,j] + sum
            if abs(G[i,j]) == 1:
                r1=i
            
        if abs(sum) == 1:
            l=G.columns()
            l.pop(j)
            B=matrix(l)
            D=B.transpose()
            m=D.rows()
            m.pop(r1)
            E=matrix(m)
            D1=standardize(D)
            E1=standardize(E)
            return (D1,E1)
            break       
    if abs(sum)!= 1:
        return "All negative edges and no loops!"
    

#To ensure there is a positive edge or negative loop to delete-contract, check 
#to make sure one exists in the incidence matrix. If not, we can switch a vertex 
#by negating a row, creating a positive edge or negative loop to delete and contract.
def switch(M):
    posEdge=False
    for item in M.columns():
        vNum=0
        sum=0
        nzExists=false
        for i in range (0,M.nrows()):
            if item[i] !=0:
                nzExists=True
                rowNum=i
            sum=sum+item[i]
        if nzExists==True and sum==0:
            posEdge=True
        elif abs(sum)==1:
	    posEdge=True
        elif nzExists==True and abs(sum)==2:
            vNum=rowNum
    if posEdge==False and M.ncols()!=0:
        M.add_multiple_of_row(vNum,vNum,-2)
    return M


#Returns the chromatic polynomial of a graph represented as an incidence matrix.    
def chrom(P):
    #Make sure the graph has a positive edge to delete and contract and delete any 
     #multiple edges using switch and check.
    P=switch(P)
    P=check(P)
    #If the graph is a negative loop, return the chromatic polynomial.
    if len(P.columns())==1:
        if len(P.rows())==1:
		if P[0][0]==abs(1):
			return 2*x
    #If the graph is empty, return the chromatic polynomial.
    empty=true
    for item in P.columns()[0]:
	if item!=0:
		empty=false
    if empty==true:
	return ((2*x)+1)^(P.nrows())
    #Else, delete and contract the graph recursively calling chrom on both the
    # graph with the deleted edge and the graph with the contracted edge. 
     #Return the difference of the parts.               
    (z,y)=DC(P)
    return expand(chrom(z))-expand(chrom(y))
    
#Returns the chromatic polynomial of a graph represented as an incidence matrix.    
def zeroFreeChrom(P):
    #Make sure the graph has a positive edge to delete and contract and delete any 
     #multiple edges using switch and check.
    P=switch(P)
    P=check(P)
    #If the graph is a negative loop, return the chromatic polynomial.
    if len(P.columns())==1:
        if len(P.rows())==1:
		if P[0][0]==abs(1):
			return 2*x
    #If the graph is empty, return the chromatic polynomial. 
     #There are 2x choices for every vertex in 
    #the graph because we are not coloring with zero
    empty=true
    for item in P.columns()[0]:
	if item!=0:
		empty=false
    if empty==true:
	return ((2*x))^(P.nrows())
    #Else, delete and contract the graph recursively calling zeroFreeChrom on 
     #both the graph with the deleted edge and the graph with the contracted edge. 
      #Return the difference of the parts.               
    (z,y)=DC(P)
    return expand(zeroFreeChrom(z))-expand(zeroFreeChrom(y))
\end{verbatim}
