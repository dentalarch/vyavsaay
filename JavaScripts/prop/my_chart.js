function getRandomColor() {
    var letters = '012345678'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 9)];
    }
    return color;
}

function getLighterColor(color)
{
	var letters=color.split('');
	var result="#";
	for (var i=1;i<7;i++)
	{
		var new_letter=parseInt(color[i])+1;
		result+=""+new_letter;
	}
	return result;
}

function transform_to_sum(data_array,sum_column,filter_column)
{
	var result=new Array();
	for(var i=0; i<data_array.length;i++)
	{
		var new_obj=new Object();
		new_obj.label=data_array[i][filter_column];
		new_obj.value=parseInt(data_array[i][sum_column]);
		for(var j=i+1;j<data_array.length;j++)
		{
			if(data_array[j][filter_column]==new_obj.label)
			{
				new_obj.value+=parseInt(data_array[j][sum_column]);
				data_array.splice(j,1);
				j-=1;
			}
		}
		result.push(new_obj);
	}
	return result;
}


function transform_to_pie_sum(data_array,sum_column,filter_column)
{
	var result=new Array();
	for(var i=0; i<data_array.length;i++)
	{
		var new_obj=new Object();
		new_obj.label=data_array[i][filter_column];
		new_obj.value=parseInt(data_array[i][sum_column]);
		new_obj.color=getRandomColor();
		new_obj.highlight=getLighterColor(new_obj.color);
		for(var j=i+1;j<data_array.length;j++)
		{
			if(data_array[j][filter_column]==new_obj.label)
			{
				new_obj.value+=parseInt(data_array[j][sum_column]);
				data_array.splice(j,1);
				j-=1;
			}
		}
		result.push(new_obj);
	}
	return result;
}


function transform_to_pie_count(data_array,filter_column)
{
	var result=new Array();
	for(var i=0; i<data_array.length;i++)
	{
		var new_obj=new Object();
		new_obj.label=data_array[i][filter_column];
		new_obj.value=1;
		new_obj.color=getRandomColor();
		new_obj.highlight=getLighterColor(new_obj.color);
		for(var j=i+1;j<data_array.length;j++)
		{
			if(data_array[j][filter_column]==new_obj.label)
			{
				new_obj.value+=1;
				data_array.splice(j,1);
				j-=1;
			}
		}
		result.push(new_obj);
	}
	return result;
}

function transform_to_bar_sum(data_array,label_display,sum_column,label_column)
{
	var result=new Object();
	result.datasets=new Array();
	result.datasets[0]=new Object();
	result.datasets[0].label=label_display;
	result.datasets[0].fillColor=getRandomColor();
	result.datasets[0].strokeColor=result.datasets[0].fillColor;
	result.datasets[0].highlightFill=getLighterColor(result.datasets[0].fillColor);
	result.datasets[0].highlightStroke=getLighterColor(result.datasets[0].fillColor);
	result.datasets[0].data=new Array();
	result.labels=new Array();
	
	for(var i=0; i<data_array.length;i++)
	{
		var label=data_array[i][label_column];
		var value=parseInt(data_array[i][sum_column]);
		for(var j=i+1;j<data_array.length;j++)
		{
			if(data_array[j][label_column]==label)
			{
				value+=parseInt(data_array[j][sum_column]);
				data_array.splice(j,1);
				j-=1;
			}
		}
		result.labels.push(label);
		result.datasets[0].data.push(value);
	}
	return result;
}


function transform_to_multi_bar_sum(data_array0,data_array1,label_display0,label_display1,sum_column,label_column)
{
	var result=new Object();
	result.datasets=new Array();
	result.datasets[0]=new Object();
	result.datasets[0].label=label_display0;
	result.datasets[0].fillColor=getRandomColor();
	result.datasets[0].strokeColor=result.datasets[0].fillColor;
	result.datasets[0].highlightFill=getLighterColor(result.datasets[0].fillColor);
	result.datasets[0].highlightStroke=getLighterColor(result.datasets[0].fillColor);
	result.datasets[0].data=new Array();
	result.datasets[1]=new Object();
	result.datasets[1].label=label_display1;
	result.datasets[1].fillColor=getRandomColor();
	result.datasets[1].strokeColor=result.datasets[0].fillColor;
	result.datasets[1].highlightFill=getLighterColor(result.datasets[1].fillColor);
	result.datasets[1].highlightStroke=getLighterColor(result.datasets[1].fillColor);
	result.datasets[1].data=new Array();
	
	result.labels=new Array();
	
	while(data_array0.length!=0 || data_array1.length!=0)
	{
		var label="";
		var value0=0;
		var value1=0;
		
		if(data_array0.length!=0)
			label=data_array0[0][label_column];
		else
			label=data_array1[0][label_column];
		
		
		for(var k=0;k<data_array0.length;k++)
		{
			if(data_array0[k][label_column]==label)
			{
				value0+=parseInt(data_array0[k][sum_column]);
				data_array0.splice(k,1);
				k-=1;
			}
		}
		
		for(var j=0;j<data_array1.length;j++)
		{
			if(data_array1[j][label_column]==label)
			{
				value1+=parseInt(data_array1[j][sum_column]);
				data_array1.splice(j,1);
				j-=1;
			}
		}
		if(value0<=value1)
		{
			result.labels.push(label);
			result.datasets[0].data.push(value0);
			result.datasets[1].data.push(value1);
		}
	}
	return result;
}
