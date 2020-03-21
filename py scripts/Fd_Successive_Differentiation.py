import math
import numpy as np
import plotly.graph_objs as go
import plotly.offline as ply
import requests
import json

def successive_differentiation(mu,alpha):
    i=0
    f=[]   # x
    t=[]   # x axis
    dio=[]
    dfo=[]
    while(i<10):
        t.append(i)
        f.append(pow(t[-1],mu))
        dio.append(mu*pow(t[-1],mu-1))
        dfo.append((math.gamma(mu+1)/math.gamma(mu-alpha+1))*pow(t[-1],(mu-alpha)))
        i+=0.01

    
    #print(len(t),len(f),len(dio),len(dfo))
    trace1=go.Scatter(x=t,y=f,line={'color':'blue'},name="t-f")
    trace2=go.Scatter(x=t,y=dio,line={'color':'red'},name="t-dio")
    trace3=go.Scatter(x=t,y=dfo,line={'color':'green'},name="t-dfo")
    
    layout = go.Layout(
    title=go.layout.Title(
        text='Fractional Derivative',
        xref='paper',
        x=0
    ),
    xaxis=go.layout.XAxis(
        title=go.layout.xaxis.Title(
            text='t',
            font=dict(
                family='Courier New, monospace',
                size=18,
                color='#7f7f7f'
            )
        )
    ),
    yaxis=go.layout.YAxis(
        title=go.layout.yaxis.Title(
            text='f / dio / dfo',
            font=dict(
                family='Courier New, monospace',
                size=18,
                color='#7f7f7f'
                )
            )
        )
    )

    data=[trace1,trace2,trace3]
    fig=go.Figure(data,layout)
    fig.to_html("sample.jpg")
    #ply.plot(fig,filename="render.html")

    obj={
        "tfx":t,
        "tfy":f,
        "tdioy":dio,
        "tdfoy":dfo

    }

    print(json.dumps(obj))
    


    #r=requests.put('http://localhost:3000/read',json={"trace1":str(trace1),"trace2":str(trace2),"trace3":str(trace3)})
    
    #print(json.dumps(obj))
    # plt.plot(t,f,color="blue")
    # plt.plot(t,dio,color="red")
    # plt.plot(t,dfo,color="green")
    # plt.show()
successive_differentiation(1.2,0.1)
