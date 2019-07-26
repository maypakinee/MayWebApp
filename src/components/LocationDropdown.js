import React, { Component } from 'react'

export default class LocationDropDown extends Component {

    locationSelected(e){
        console.log(e.target);
        let locationn = e.target.getAttribute('data-name');
        console.log(locationn);
        
        
    }

    render() {
        let locations = this.props.locations;

        let defaultLabel = this.props.defaultLabel;
        return (
            <div className="dropdown">
                <a
                    class="btn btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    {defaultLabel}
                   {/*Dropdown link */} 
        </a>

                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    {
                        //   locations.map((location, i) => 
                        //     <a class="dropdown-item" href="#" key={location.id}>{location.name}</a>
                        //   )

                        locations.map((location, index) => {
                            return <a class="dropdown-item" onClick={e => this.locationSelected(e)} href="#" key={location.id} data-id={location.id} data-name={location.name} >{location.name}</a>
                        })
                    }
                </div>
            </div>
        )
    }
}

