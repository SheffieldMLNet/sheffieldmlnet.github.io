$(function() {
    ready = false;
    slider_resolution = 10;
    inputlabels = ['orangeyness','size','bias'];
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    networkconfig = urlParams.get('config');
    dataconfig = urlParams.get('data');
    activity = urlParams.get('activity');
    if (activity==1) {
        $('#intro_header').text('')
        $('#intro_text').html('We need to use our training data to pick values for three parameters that control our classifier. Use the sliders to adjust the parameters, to get the biggest score. In the graph the red circles are the bad oranges, the blue ones are good. The background shade shows what the classifier will classify the oranges as. Ideally the red (bad) oranges need to be in the red shaded area, and the blue (good) oranges in the blue shaded area.')
        $('#main_header').text('What\'s going on?')
        $('#main_text').html('This is a logistic regression classifier. The probability, \\(p\\), of an item being a good orange is computed by finding the weighted sum of the two parameters, and squashing it with the logistic function, \\(\\sigma\\), $$p=\\sigma(w_1 \\times orangeyness + w_2 \\times size + w_3).$$ The logistic function forces them to be between zero and one (so we can use it as a probability).<br/>We look at the labelled data, and see what the probability of it being that label (so if it\'s labelled as a bad orange we would use \\(1-p\\), if it\'s good we use \\(p\\)). We sum up the (log) probabilities to get the score.');
        $('#subtitle').text('Activity 1: Logistic Regression with Linearly Separable Data') 
        networkconfig=1;
        dataconfig=1;
    }
    if (activity==2) {
        $('#intro_header').text('')
        $('#intro_text').html('We are still using logistic regression, but the data is more awkward. You will find we can\'t separate the two datasets with this classifier.')
        $('#main_header').text('What\'s going on?')
        $('#main_text').html('The bad oranges can be found at both the small / not-orange part of the graph <b>and</b> in the very big / very-orange part. Because our classifier uses a linear combination of the inputs we only get a straight-line decision boundary. This can\'t separate the two classes. To do that we need an <b>interaction</b> between the two inputs. There are many ways to achieve this. In the next activity we\'ll add another layer to our classifier to achieve this.');
        $('#subtitle').text('Activity 2: Logistic Regression with Tricky Data') 
        networkconfig=1;
        dataconfig=2;
    }
    if (activity==3) {
        $('#intro_header').text('')
        $('#intro_text').html('For this more awkward data, we need to use a more complicated classifier (with more parameters). Try tweaking the parameters again to find a good solution (you might find this isn\'t very easy without a bit more help!).')
        $('#main_header').text('What\'s going on?')
        $('#main_text').html('This dataset is not linearly separable. We can use a more complex classifier, called a deep neural network. This takes the weighted sum of inputs of one layer, puts it through a non-linear \'activation\' function, then uses that new value in the next layer. This lets us make more complicated decision boundaries. But it\'s more complicated and has more parameters!');
        $('#subtitle').text('Activity 3: Deep Neural Network with Tricky Data') 
        networkconfig=2;
        dataconfig=2;
    }
    
    if (networkconfig==1) {
        num_n = [3,2];
    }
    if (networkconfig==2) {
        num_n = [3,3,2];
    }
    if (networkconfig==3) {
        num_n = [3,4,3,2];
    }    
    if (networkconfig==4) {
        num_n = [3,5,4,4,4,2];
    }
    
    if (dataconfig==1) {
        data = [[0.54, 0.76, 1.  ],
       [0.58, 0.5 , 1.  ],
       [0.4 , 0.68, 1.  ],
       [0.1 , 0.15, 0.  ],
       [0.64, 0.4 , 0.  ],
       [0.5 , 0.04, 0.  ],
       [0.05, 0.41, 0.  ],
       [0.78, 0.23, 1.  ],
       [0.99, 0.76, 1.  ],
       [0.33, 0.47, 1.  ],
       [0.56, 0.88, 1.  ],
       [0.93, 0.64, 1.  ],
       [0.94, 0.64, 1.  ],
       [0.13, 0.46, 0.  ],
       [0.47, 0.09, 0.  ],
       [0.38, 0.4 , 1.  ],
       [0.36, 0.22, 0.  ],
       [0.82, 0.41, 1.  ],
       [0.14, 0.49, 1.  ],
       [0.39, 0.16, 0.  ],
       [0.66, 0.33, 1.  ],
       [0.69, 0.18, 1.  ],
       [0.71, 0.99, 1.  ],
       [0.72, 0.57, 1.  ],
       [0.48, 0.8 , 1.  ],
       [0.38, 0.79, 1.  ],
       [0.55, 0.67, 1.  ],
       [0.68, 0.66, 1.  ],
       [0.14, 0.64, 1.  ],
       [0.97, 0.79, 1.  ],
       [0.48, 0.73, 1.  ],
       [0.02, 0.89, 1.  ],
       [0.46, 0.96, 1.  ],
       [0.87, 0.92, 1.  ],
       [0.21, 0.58, 1.  ],
       [0.2 , 0.39, 0.  ],
       [0.16, 0.41, 1.  ],
       [0.92, 0.85, 1.  ],
       [0.39, 0.09, 0.  ],
       [0.87, 0.85, 1.  ],
       [0.05, 0.12, 0.  ],
       [0.18, 0.86, 0.  ],
       [0.93, 0.44, 1.  ],
       [0.51, 0.99, 1.  ],
       [0.46, 0.5 , 1.  ],
       [0.34, 0.56, 1.  ],
       [0.37, 0.84, 1.  ],
       [0.77, 0.29, 0.  ],
       [0.81, 0.41, 1.  ],
       [0.51, 0.47, 1.  ]];
    }
    if (dataconfig==2) {
    data = [[0.63, 0.57, 0.  ],
       [0.61, 0.79, 0.  ],
       [1.  , 0.09, 1.  ],
       [0.34, 0.14, 0.  ],
       [0.39, 0.17, 0.  ],
       [0.72, 0.16, 1.  ],
       [0.16, 0.03, 0.  ],
       [0.22, 0.39, 0.  ],
       [0.8 , 0.17, 1.  ],
       [0.42, 0.75, 1.  ],
       [0.14, 0.92, 1.  ],
       [0.3 , 0.88, 1.  ],
       [0.83, 0.6 , 1.  ],
       [0.49, 0.29, 1.  ],
       [0.14, 0.87, 1.  ],
       [0.71, 0.6 , 0.  ],
       [0.37, 0.23, 0.  ],
       [0.42, 0.69, 1.  ],
       [0.24, 0.06, 0.  ],
       [0.92, 0.14, 1.  ],
       [0.01, 0.63, 1.  ],
       [0.83, 0.96, 0.  ],
       [0.4 , 0.94, 1.  ],
       [0.53, 0.97, 1.  ],
       [0.44, 0.07, 1.  ],
       [0.17, 0.23, 0.  ],
       [0.73, 0.72, 0.  ],
       [0.69, 0.99, 0.  ],
       [0.68, 0.98, 0.  ],
       [0.46, 0.62, 1.  ],
       [0.23, 0.19, 0.  ],
       [0.34, 0.48, 1.  ],
       [0.51, 0.49, 1.  ],
       [0.24, 0.02, 0.  ],
       [0.67, 0.75, 0.  ],
       [0.49, 0.33, 1.  ],
       [0.17, 0.49, 1.  ],
       [0.85, 0.68, 0.  ],
       [0.95, 0.51, 0.  ],
       [0.84, 0.28, 1.  ],
       [0.88, 0.84, 0.  ],
       [0.42, 0.44, 1.  ],
       [0.99, 0.12, 1.  ],
       [0.4 , 0.48, 1.  ],
       [0.43, 0.78, 1.  ],
       [0.03, 0.35, 0.  ],
       [0.9 , 0.5 , 0.  ],
       [0.46, 0.32, 0.  ],
       [0.05, 0.14, 0.  ],
       [0.24, 0.07, 0.  ],
       [0.95, 0.79, 0.  ],
       [0.87, 0.91, 0.  ],
       [0.44, 0.28, 0.  ],
       [0.56, 0.93, 0.  ],
       [0.13, 0.24, 0.  ],
       [0.81, 0.62, 0.  ],
       [0.53, 0.37, 0.  ],
       [0.03, 0.8 , 1.  ],
       [0.32, 0.44, 0.  ],
       [0.05, 0.82, 1.  ],
       [0.06, 0.54, 0.  ],
       [0.52, 0.42, 0.  ],
       [0.03, 0.02, 0.  ],
       [0.01, 0.4 , 0.  ],
       [0.36, 0.26, 1.  ],
       [0.91, 0.01, 1.  ],
       [0.51, 0.91, 0.  ],
       [0.56, 0.44, 0.  ],
       [0.34, 0.37, 0.  ],
       [0.46, 0.35, 0.  ],
       [0.14, 0.64, 1.  ],
       [0.64, 0.46, 0.  ],
       [0.77, 0.42, 0.  ],
       [0.5 , 0.79, 0.  ],
       [0.91, 0.02, 1.  ],
       [0.13, 0.87, 1.  ],
       [0.53, 0.17, 0.  ],
       [0.09, 0.93, 1.  ],
       [0.42, 0.71, 1.  ],
       [0.76, 0.04, 1.  ],
       [0.88, 0.13, 1.  ],
       [0.92, 0.2 , 1.  ],
       [0.65, 0.9 , 0.  ],
       [0.38, 0.46, 1.  ],
       [0.93, 0.11, 1.  ],
       [0.52, 0.2 , 0.  ],
       [0.52, 0.71, 1.  ],
       [0.38, 0.9 , 1.  ],
       [0.31, 0.03, 0.  ],
       [0.79, 0.01, 1.  ],
       [0.5 , 0.25, 1.  ],
       [0.36, 0.41, 0.  ],
       [0.29, 0.5 , 1.  ],
       [0.82, 0.14, 1.  ],
       [0.76, 0.19, 1.  ],
       [0.67, 0.58, 0.  ],
       [0.91, 0.89, 0.  ],
       [0.88, 0.42, 1.  ],
       [0.55, 0.83, 0.  ],
       [0.57, 0.47, 0.  ]]
    }
    if (dataconfig==3) {
        data = [[0.1,0.13,0],[0.21,0.04,0],[0.42,0.11,0],[0.04,0.43,0],[0.67,0.64,1],[0.45,0.65,1],[0.42,0.91,1],[0.33,0.44,1],[0.74,0.07,0],[0.85,0.11,1]];
    }
    
    function computeres(params,num_neurons,x,y) {
            weightidx = 0;
        invals = [x,y,1];

        for (var layer=0;layer<num_neurons.length-1; layer++) {
            
            outvals = Array(num_neurons[layer+1]).fill(0)
            for (var neuron=0;neuron<num_neurons[layer]; neuron++){
                if (layer<num_neurons.length-1) {
                    for (var nextneuron=0;nextneuron<num_neurons[layer+1]-1; nextneuron++){
                        outvals[nextneuron]+=params[weightidx]*invals[neuron];

                        weightidx++;
                    }
                }
            }
            invals = []
            for (var ni=0;ni<outvals.length;ni++) {
                v = 1/(1+Math.exp(-outvals[ni]))
                invals.push(v);
            }
            invals.push(1);
        }
        logival = invals[0];
        return logival;
    }
    
    
    function getrgb(logival) {
        
        
        //val = params[0]*x + params[1]*y + params[2];
        //logival = 1/(1+Math.exp(-val));
        
        red = 2-logival*2;
        if (red<0) {red=0;}
        blue = logival*2;
        if (red>1) {red=1;}
        if (blue>1) {blue=1;}
        green = 1-2*Math.abs(logival-0.5);
        return [red*255,green*255,blue*255];
    }
    function computedatascore(params,num_neurons,data) {
        score = 0;
        
        for (dataidx=0;dataidx<data.length;dataidx++) {
            p = computeres(params,num_neurons,data[dataidx][0],data[dataidx][1]);
            //console.log([data[dataidx][2],Math.log(p)]);
            s = (data[dataidx][2]) * Math.log(p+0.000001) + (1-data[dataidx][2]) * Math.log(1.000001-p);
            score+=s;
        }
        return score;
    }
    
    function computescoregrad(params,num_neurons,data) {
        grads = [];
        for (parami=0;parami<params.length;parami++) {
            temp_params = [...params];
            temp_params[parami]+=0.01;
            grad = computedatascore(temp_params,num_neurons,data)-computedatascore(params,num_neurons,data);
            grads.push(grad / 0.01);
        }
        return grads;
    }
    
    //var width = $(".w3-twothird").width();
    var width = 650;
    var height = 345;
    var gridres = 15;
    r = Raphael("chart", width, height+50);
    txt = {"font": '10px Fontin-Sans, Arial', stroke: "none", fill: "#fff"};
    //r.rect(0,0,width,height).attr({fill: "0-#fff-#f00:20-#000", stroke: "none"});
    
    
  
    rects = []
    plotleftborder = 40;
    for (var x = 0; x<width; x+=gridres) {
        for (var y = 0; y<height; y+=gridres) {    
            rec = r.rect(x+plotleftborder,y,gridres,gridres).attr({fill: "white", stroke:"none"});
            rects.push(rec);
        }
    }

    for (var i = 0; i<data.length; i++) {
        if (data[i][2]==0) {fill="#f00"}
        if (data[i][2]==1) {fill="#00f"}
        r.circle(data[i][0]*width+plotleftborder,height-data[i][1]*height,5).attr({fill: fill});
    }
    r.path("M"+width+" "+height+"L"+plotleftborder+" "+height+"L"+plotleftborder+" 0").attr({"stroke-width": 10, stroke: "#000"});
    r.text(20,200,'Size').attr({"font": '20px Fontin-Sans, Arial'}).transform("r-90");
    r.text(200,height+20,'Orangeyness').attr({"font": '20px Fontin-Sans, Arial'});
    function getnumweights(num_neurons){
        n = 0;
        for (num=0;num<num_neurons.length-1;num++)
        {
            n += num_neurons[num]*(num_neurons[num+1]-1)
        }
        return n;
    }
    function redraw(num_neurons){
        params = [];

        for (var i = 0;i<getnumweights(num_neurons);i++) {
            params.push($('#w'+i).val()/slider_resolution);
        }
        i = 0;
        for (var x = 0; x<width; x+=gridres) {
            for (var y = 0; y<height; y+=gridres) {    
                logival = computeres(params,num_neurons,x/width,1-y/height);
                rgb = getrgb(logival);
                rec = rects[i];
                i+=1;
                rec.attr({fill: "rgb(" + rgb.join(",") + ")", stroke:"none", title:logival.toFixed(2)});
            }
        }
        score = computedatascore(params,num_neurons,data);
        $("#score").text((200+score).toFixed(1));
        grads = computescoregrad(params,num_neurons,data)

        for (var i = 0;i<getnumweights(num_neurons);i++) {
            //if (grads[i]>2) $("#warrow"+i).attr("src","up3.png")
            //else if (grads[i]>0.5) $("#warrow"+i).attr("src","up2.png")
            //else if (grads[i]>0.01) $("#warrow"+i).attr("src","up1.png");
            //else if (grads[i]<-2) $("#warrow"+i).attr("src","down3.png")
            //else if (grads[i]<-0.5) $("#warrow"+i).attr("src","down2.png")
            //else if (grads[i]<-0.01) $("#warrow"+i).attr("src","down1.png")
            //else $("#warrow"+i).attr("src","none.png")
            if (grads[i]>0.05) $("#warrow"+i).attr("src","up1.png")
            else if (grads[i]<-0.05) $("#warrow"+i).attr("src","down1.png")
            else $("#warrow"+i).attr("src","none.png")
        }
        
    }

    
    
    //redraw([2,1]);
    
    leftborder = 150;
    rightborder = 15;
    rnetwork = Raphael("network", width, height);    
    function drawnetwork(num_neurons,inputlabels)
    {
        for (var neuron=0;neuron<num_neurons[0]; neuron++){
            y = height/(num_neurons[0]+1) * (neuron+1);
            rnetwork.text(leftborder/2,y,inputlabels[neuron]).attr({"font": '20px Fontin-Sans, Arial'});
        }
        weightidx = 0
        for (var layer=0;layer<num_neurons.length; layer++){
            x = layer*((width-(leftborder+rightborder))/(num_neurons.length-1))+leftborder;
            nextx = (1+layer)*((width-(leftborder+rightborder))/(num_neurons.length-1))+leftborder;
            for (var neuron=0;neuron<num_neurons[layer]; neuron++){
                y = height/(num_neurons[layer]+1) * (neuron+1);
                if (layer<num_neurons.length) {
                    for (var nextneuron=0;nextneuron<num_neurons[layer+1]-1; nextneuron++){                
                        nexty = height/(num_neurons[layer+1]+1) * (nextneuron+1);
                        rnetwork.path("M"+x+" "+y+"L"+nextx+" "+nexty);
                        midx = (x*0.75+nextx*0.25)-50;
                        midy = (y*0.75+nexty*0.25)-10;
                        if (num_neurons.length<3) 
                            {$("#wlabel"+weightidx).text('\\(w_'+(weightidx+1)+'\\)');}
                        else
                            {$("#wlabel"+weightidx).text('\\(w_{'+(neuron+1)+','+(nextneuron+1)+'}^{('+(layer+1)+')}\\)');}
                        $("#wctrl"+weightidx).css({top: midy, left: midx, position:'absolute'});
                        weightidx+=1;
                    }   
                }
                if (neuron<num_neurons[layer]-1) {
                    rnetwork.circle(x,y,10).attr({fill:'#8fa'});                    
                }
                else
                {
                    if (layer<num_neurons.length-1) {
                        rnetwork.circle(x,y,3).attr({fill:'#000'});
                    }
                }

                
            }
        }
    }

    /*rnetwork.rect(0,0,width,height).attr({fill: "0-#fff-#f00:20-#000", stroke: "none"});*/
    /*rnetwork.path("M10 100L100 50L200 100M10 200L100 150L200 100");*/
    
    

    
    
           
    scale = 5*slider_resolution;
    for (weightidx=0;weightidx<getnumweights(num_n);weightidx++){
      
      $('#network').append('<span class="weightcontrol" id="wctrl'+weightidx+'"><span class="weightlabel" id="wlabel'+weightidx+'"></span><input type="range" min="-'+scale+'" max="'+scale+'" value="0" class="slider weight" id="w'+weightidx+'"><span class="weightnum" id="wnum'+weightidx+'">0</span><img class="weightarrow" src="up1.png" id="warrow'+weightidx+'"></span>');

    }
    $('.weight').on('change', function(e){   
        //if (ready) {
            v = $(e.target).val()/slider_resolution;
            $(e.target).parent().children(".weightnum").text(v);
            
            redraw(num_n);
        //}
    });

    $("#network").css({position: 'relative'});      
    drawnetwork(num_n,inputlabels);    
    setTimeout( function() { ready = true;
        for (weightidx=0;weightidx<getnumweights(num_n);weightidx++){
            n = slider_resolution*(10*Math.random()-5)
            if ((n>-1) && (n<1))     
            {
                n=1;
            } //hack to avoid nearly zero mess.
            $('#w'+weightidx).val(n);

        }
        $('input').trigger('change');        
     }, 100);
});
