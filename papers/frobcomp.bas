DEFLNG I-N
DEFDBL A-H, O-Z
RANDOMIZE TIMER
PRINT "input the number of runs ns"
INPUT ns
PRINT "input the range of randomization ks.For constant input ks=0"
INPUT ks
PRINT "input the starting point for a"
INPUT ias
PRINT "input the starting point for b"
INPUT ibs
PRINT "input the starting point for c"
INPUT ics
OPEN "c:\frob.dat" FOR OUTPUT AS #3
FOR l = 1 TO ns
lr1: iaa = INT(ias + ks * RND)
ibb = INT(ibs + ks * RND)
icc = INT(ics + ks * RND)
ifl = 1
ia = iaa
ib = ibb
lr2: ifg = 1
na = ia
nb = ib
IF (ia > ib) THEN
na = ib
nb = ia
END IF
nr = nb
nax = na
cont10: IF (na = 1) THEN
GOTO cont2
END IF
cont3: IF (nr = 0) THEN
ifg = 0
GOTO cont2
END IF
cont4: nr = nr - na
IF (nr = 0) THEN
ifg = 0
GOTO cont2
ELSEIF (nr < 0) THEN
na = nr + na
nb = nax
nax = na
nr = nb
GOTO cont10
ELSE
GOTO cont4
END IF
cont2:
IF (ifg = 0) THEN
GOTO lr1
ELSE
ifl = ifl + 1
END IF
IF (ifl = 2) THEN
ib = icc
GOTO lr2
ELSEIF (ifl = 3) THEN
ia = ibb
ib = icc
GOTO lr2
ELSE
GOTO lr10
END IF
lr10:
na = iaa
nb = ibb
nc = icc
IF (na > nb) THEN
na = ibb
nb = iaa
END IF
IF (nc < na) THEN
naa = na
nbb = nb
na = icc
nb = naa
nc = nbb
ELSEIF (nc < nb) THEN
nbb = nb
nb = icc
nc = nbb
END IF
lb = INT(nc / nb) + 1
la = INT(nc / na) + 1
FOR k = 1 TO lb
   FOR j = 1 TO la
   nkj = k * nb + j * na
   IF ((nc - nkj) = 0) THEN
   GOTO lr1
   END IF
   NEXT j
   NEXT k
lr3:
ia = iaa
ib = ibb
ic = icc
iz = ia * ib * ic
 e0 = (ia * ib + ia * ic + ib * ic + (ia ^ 2 + ib ^ 2 + ic ^ 2) / 3) / (4 * iz)
 e1 = -(ia + ib + ic) / (2 * iz)
 e2 = 1 / (2 * iz)
 pi = 4 * ATN(1!)
hk = 6
    rb = (-e1 + SQR(e1 ^ 2 - 4 * (e0 - hk) * e2)) / (2 * e2)
    dlt = na
    mb = INT(SQR(3 * iz) + 2 * dlt)
    itf = mb
cont1:    A = 0
    FOR j = 1 TO (ia - 1)
    Nja = COS((pi * j * (2 * itf - ib - ic)) / ia)
    Dja = SIN((pi * j * ib) / ia) * SIN((pi * j * ic) / ia)
    A = A + Nja / Dja
    NEXT j
    A = -A / (4 * ia)
    B = 0
    FOR j = 1 TO (ib - 1)
    Njb = COS((pi * j * (2 * itf - ia - ic)) / ib)
    Djb = SIN((pi * j * ia) / ib) * SIN((pi * j * ic) / ib)
    B = B + Njb / Djb
    NEXT j
    B = -B / (4 * ib)
    C = 0
    FOR j = 1 TO (ic - 1)
    Njc = COS((pi * j * (2 * itf - ib - ia)) / ic)
    Djc = SIN((pi * j * ib) / ic) * SIN((pi * j * ia) / ic)
    C = C + Njc / Djc
    NEXT j
    C = -C / (4 * ic)
    FHAR = A + B + C
    y = FHAR + e0 + e1 * itf + e2 * (itf ^ 2)
    IF (y > .1) THEN
    itf = itf - 1
    GOTO cont1
    END IF
    IF ((mb - itf) < dlt) THEN
    mb = mb + dlt
    itf = mb
    GOTO cont1
    END IF
    PRINT na, nb, nc, itf, mb
    PRINT #3, USING "### ### ###  ######  ######"; ia; ib; ic; itf; mb
    NEXT l
    CLOSE #3
    END









