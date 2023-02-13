
//new_point function, creates a new point in the svg.
function new_point(){
    //get coords, then convert them into proper positions
    let x_element = document.getElementById("x_select");
    let y_element = document.getElementById("y_select");
    let xy = scale(+x_element.options[x_element.selectedIndex].text,+y_element.options[y_element.selectedIndex].text,false)
    //new html string inserted into svg as child before the end
    let html = `<circle onclick=\"outline_text()\" cx=${xy[0]} cy=${xy[1]} r=7 />`
    let svg = document.getElementById('graph');
    svg.insertAdjacentHTML('beforeend', html);
}

//scale function, takes in x and y coordinates with a bool, transforms accordingly
function scale(x,y,reverse){
    // html position to graph notation
    if(reverse){
        return [(x-5)/20, -1*(y-200)/20];
    }
    // graph notation to html position
    else {
        return [(20*x)+5, 200-(20*y)];
    }
}

//outline_text, adds/removes a border to the point, and changes text on last click.
function outline_text(){
    // point that was clicked
    let element = event.target;
    // set stroke to black
    element.setAttribute('stroke','black');
    // if a stroke width (border) was already present, change it to 0
    let val = 2;
    if (+element.getAttribute('stroke-width') === 2){
        val = 0;
    }
    // apply the border
    element.setAttribute('stroke-width', val);
    // scale the point's html position to graph notation for the text, then set it
    let xy = scale(+element.getAttribute('cx') ,+element.getAttribute('cy'), true);
    document.getElementById('point').textContent = 'Last clicked point.. (' + String(xy[0]) + ',' + String(xy[1])+')';
}
