import React from 'react';

import $ from 'jquery';

import { ColorPicker } from '@progress/kendo-react-inputs';

import { Upload } from '@progress/kendo-react-upload';

import Header from '../header/header';

import Nav from '../header/nav';

import Rightnav from '../header/rightNav';

import Searchbar from '../searchbar/searchbar';

const navcolors = [

	{ title: 'Nav Title Icons', subtitle: 'Nav Icons Color For Titles', color: '#e556e3'},
	{ title: 'Section Titles', subtitle: 'Nav Section Titles color', color: '#378eaf'},
	{ title: 'Nav Heading', subtitle: 'Nav Heading Color', color: '#194059'},
	{ title: 'Nav Sub-Heading', subtitle: 'Nav Sub Heading Color', color: '#194059'},
	{ title: 'Nav Icon Color', subtitle: 'Icon Color Inside the Nav', color: '#1c4a5c'},
	{ title: 'Icon Background', subtitle: 'Icon Background Color', color: '#efefef'},
	{ title: 'Nav Background', subtitle: 'Nav Background Color', color: '#fafafa'},
	{ title: 'Nav Sub Background', subtitle: 'Nav Sub Background Color', color: '#ffffff'},
	{ title: 'Nav Child Sub Background', subtitle: 'Nav Child Sub Background Color', color: '#fdfdfd'}
];

const globalcolors = [

	{ title: 'General Icons', subtitle: 'General Icons, DatePicker Icons', color: '#2796c6'},
	{ title: 'Calendar Icons', subtitle: 'Search bar Calendar Icons', color: '#2796c6'},
	{ title: 'Grid Tabs', subtitle: 'KendoGrid tabs Text', color: '#125d8c'}
];

const fileStatuses = [
    'UploadFailed',
    'Initial',
    'Selected',
    'Uploading',
    'Uploaded',
    'RemoveFailed',
    'Removing'
];


class Designsettings extends React.Component {

	componentDidMount() {

		$.fn.DesignSetts_R = () => {

			// window.onload = function(){
        
			//     //Check File API support
			//     if(window.File && window.FileList && window.FileReader)
			//     {
			//         var filesInput = document.getElementById("files");
			        
			//         filesInput.addEventListener("change", function(event){
			            
			//             var files = event.target.files; //FileList object
			//             var output = document.getElementById("result");
			            
			//             for(var i = 0; i< files.length; i++)
			//             {
			//                 var file = files[i];
			                
			//                 //Only pics
			//                 if(!file.type.match('image'))
			//                   continue;
			                
			//                 var picReader = new FileReader();
			                
			//                 picReader.addEventListener("load",function(event){
			                    
			//                     var picFile = event.target;
			                    
			//                     var div = document.createElement("div");
			                    
			//                     div.innerHTML = "<img class='thumbnail' src='" + picFile.result + "'" +
			//                             "title='" + picFile.name + "'/>";
			                    
			//                     output.insertBefore(div,null); 
			                
			//                 });
			                
			//                  //Read the image
			//                 picReader.readAsDataURL(file);

			//                 //$('#thisFile').html($('#files').val());
			//                 $('#thisFile').val(this.files && this.files.length ? this.files[0].name.split('.')[0] : '');
			//             } 

			                                        
			           
			//         });
			//     }
			//     else
			//     {
			//         console.log("Your browser does not support File API");
			//     }
			// }
		}
	}

	constructor(props) {
        super(props);

        this.state = {
            files: [],
            events: [],
            filePreviews: {}
        };
    }

    onAdd = (event) => {
        const afterStateChange = () => {
            event.affectedFiles
                .filter(file => !file.validationErrors)
                .forEach(file => {
                    const reader = new FileReader();

                    reader.onloadend = (ev) => {
                        this.setState({
                            filePreviews: {
                                ...this.state.filePreviews,
                                [file.uid]: ev.target.result
                            }
                        });
                    };

                    reader.readAsDataURL(file.getRawFile());
                });
        };

        this.setState({
            files: event.newState,
            events: [
                ...this.state.events,
                `File selected: ${event.affectedFiles[0].name}`
            ]
        }, afterStateChange);
    }

    onRemove = (event) => {
        const filePreviews = {
            ...this.state.filePreviews
        };

        event.affectedFiles.forEach(file => {
            delete filePreviews[file.uid];
        });

        this.setState({
            files: event.newState,
            events: [
                ...this.state.events,
                `File removed: ${event.affectedFiles[0].name}`
            ],
            filePreviews: filePreviews
        });
    }

    onProgress = (event) => {
        this.setState({
            files: event.newState,
            events: [
                ...this.state.events,
                `On Progress: ${event.affectedFiles[0].progress} %`
            ]
        });
    }

    onStatusChange = (event) => {
        const file = event.affectedFiles[0];

        this.setState({
            files: event.newState,
            events: [
                ...this.state.events,
                `File '${file.name}' status changed to: ${fileStatuses[file.status]}`
            ]
        });
    }


	render() {

		return(

			<div className="DesignSettingsApp">

				<Header/>

                <Nav/>

                <Rightnav/>

                <div className="main">

                	<Searchbar/>

                	<div className="panel panel-body" style={{ background: 'transparent', padding: '0'}}>
                		
                		<div className="ColorExchange" id="GSettings" style={{ paddingLeft: 0 }}>

                			<div className="prodColumm">
                				<div className="fGlobalSett NavBlk">
                					<span className="GsettT">Main Nav Colors</span>

                					{ navcolors.map( item => (
	                					<div className="blkOpt">
	                						<span className="in_Opt Left">
	                							<span className="IcPtl">{item.title}<em className="IcPdes">{item.subtitle}</em></span>
	                						</span>
	                						<div className="in_Opt Right">
	                							<span className="GenCpk">
	                								<ColorPicker view="gradient" defaultValue={item.color} />
	                							</span>
	                						</div>
	                					</div>
                					))}

                				</div>

                				<div className="fGlobalSett GlobalBlk">
                					<span className="GsettT">Global Colors</span>

                					{ globalcolors.map( value => (
	                					<div className="blkOpt">
	                						<span className="in_Opt Left">
	                							<span className="IcPtl">{value.title}<em className="IcPdes">{value.subtitle}</em></span>
	                						</span>
	                						<div className="in_Opt Right">
	                							<span className="GenCpk">
	                								<ColorPicker view="gradient" defaultValue={value.color} />
	                							</span>
	                						</div>
	                					</div>
                					))}

                				</div>
                			</div>

                		</div>

                		<div className="ImgsExchange" id="GSettings" style={{ paddingRight: 0}}>
                			<div className="fGlobalSett">
                				<span className="GsettT">Login Screen Background Images</span>

                					<div className={'upload_Box'}>
                				
						                <Upload
						                    batch={false}
						                    multiple={true}
						                    files={this.state.files}
						                    onAdd={this.onAdd}
						                    onRemove={this.onRemove}
						                    onProgress={this.onProgress}
						                    onStatusChange={this.onStatusChange}
						                    withCredentials={false}
						                    saveUrl={'https://demos.telerik.com/kendo-ui/service-v4/upload/save'}
						                    removeUrl={'https://demos.telerik.com/kendo-ui/service-v4/upload/remove'}

						                />
						                 <div className={'example-config'} style={{ marginTop: 20 }}>
						                    <ul className={'event-log'}>
						                        {
						                            this.state.events.map(event => <li>{event}</li>)
						                        }
						                    </ul>
						                </div>
						                {
						                    this.state.files.length ?
						                    <div className={'img-preview example-config'}>
						                        {
						                            Object.keys(this.state.filePreviews)
						                                .map((fileKey) => (<div className={'imgCage'}><img
						                                    src={this.state.filePreviews[fileKey]}
						                                    alt={''}
						                                    style={{ width: 'auto', maxWidth: 96, margin: 0 }}
						                                /></div>))
						                        }

						                    </div> : undefined
						                }
					           
					                </div>


                				{/*<article>
							        <input id="files" type="file" multiple/>
							        <output id="result" />

									<input type="text" id="thisFile" />
							    </article>*/}

							

                			</div>
                		</div>

                		<div className="btn_Row">

                			<div className="OverLayBtn">
                				<span className="oLayer" style={{background: 'rgba(39, 150, 198, 0.5)'}}></span>
                				<button type="submit" className="sClo MlBtn k-button k-button-icontext">Save and Publish</button>
                			</div>

                			<button class="sReset k-button">Discard changes</button>
                		</div>

                	</div>

				</div>
			</div>
		);
	}
}

export default Designsettings;