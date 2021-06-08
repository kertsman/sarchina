import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sarcina-igor-chertman';
  items: zone[] =
  [
    {
      "id": 2861,
      "areaId": 1791,
      "joinedWith": 2972,
      "sku": "3",
      "defaultSku": "3",
      "status": "open",
      "countActive": 0
    },
    {
      "id": 2967,
      "areaId": 1791,
      "joinedWith": 2861,
      "sku": "1",
      "defaultSku": "1",
      "status": "closed",
      "countActive": 0
    },
    {
      "id": 2969,
      "areaId": 1791,
      "joinedWith": null,
      "sku": "4",
      "defaultSku": "4",
      "status": "open",
      "countActive": 1
    },
    {
      "id": 2970,
      "areaId": 1791,
      "joinedWith": null,
      "sku": "5",
      "defaultSku": "5",
      "status": "closed",
      "countActive": 0
    },
    {
      "id": 2971,
      "areaId": 1791,
      "joinedWith": null,
      "sku": "6",
      "defaultSku": "6",
      "status": "open",
      "countActive": 0
    },
    {
      "id": 2972,
      "areaId": 1791,
      "joinedWith": 2974,
      "sku": "7",
      "defaultSku": "7",
      "status": "open",
      "countActive": 0
    },
    {
      "id": 2973,
      "areaId": 1791,
      "joinedWith": null,
      "sku": "8",
      "defaultSku": "8",
      "status": "open",
      "countActive": 0
    },
    {
      "id": 2974,
      "areaId": 1791,
      "joinedWith": null,
      "sku": "9",
      "defaultSku": "9",
      "status": "open",
      "countActive": 0
    },
    {
      "id": 2975,
      "areaId": 1791,
      "joinedWith": 2973,
      "sku": "10",
      "defaultSku": "10",
      "status": "open",
      "countActive": 0
    },
    {
      "id": 2976,
      "areaId": 1791,
      "joinedWith": 2973,
      "sku": "11",
      "defaultSku": "11",
      "status": "open",
      "countActive": 0
    },
    {
      "id": 2977,
      "areaId": 1791,
      "joinedWith": null,
      "sku": "12",
      "defaultSku": "12",
      "status": "open",
      "countActive": 0
    },
    {
      "id": 2978,
      "areaId": 1791,
      "joinedWith": 2971,
      "sku": "13",
      "defaultSku": "13",
      "status": "open",
      "countActive": 0
    },
    {
      "id": 2979,
      "areaId": 1791,
      "joinedWith": null,
      "sku": "15",
      "defaultSku": "15",
      "status": "open",
      "countActive": 0
    },
    {
      "id": 2980,
      "areaId": 1791,
      "joinedWith": null,
      "sku": "16",
      "defaultSku": "16",
      "status": "open",
      "countActive": 0
    },
    {
      "id": 2966,
      "areaId": 1892,
      "joinedWith": null,
      "sku": "2",
      "defaultSku": "2",
      "status": "open",
      "countActive": 0
    },
    {
      "id": 3003,
      "areaId": 1900,
      "joinedWith": null,
      "sku": "2",
      "defaultSku": "2",
      "status": "open",
      "countActive": 0
    },
    {
      "id": 3011,
      "areaId": 1900,
      "joinedWith": 3003,
      "sku": "22",
      "defaultSku": "22",
      "status": "open",
      "countActive": 0
    },
    {
      "id": 3013,
      "areaId": 1901,
      "joinedWith": 3014,
      "sku": "A1",
      "defaultSku": "A1",
      "status": "open",
      "countActive": 0
    },
    {
      "id": 3014,
      "areaId": 1901,
      "joinedWith": null,
      "sku": "A2",
      "defaultSku": "A2",
      "status": "open",
      "countActive": 0
    }
  ]

  areas:{areaId: number, zone: zone[]}[] = [];

  ngOnInit(): void {
    let unsortedBuffer: {areaId: number, zone: zone[]}[] = [];
    this.items.forEach(element => {
      if (!unsortedBuffer.find(zone => zone.areaId === element.areaId) ) {unsortedBuffer.push({areaId:element.areaId, zone: [element]}); return;}
      let seecedArray = unsortedBuffer.find(zone => zone.areaId == element.areaId)
      seecedArray?.zone.push(element);
    });
    this.sortAreas(unsortedBuffer)
  }

  sortAreas(unsortedBuffer: {areaId: number, zone: zone[]}[]) {
    for (let i = 0; i < unsortedBuffer.length; i++) {
      const zone = unsortedBuffer[i].zone;
      this.areas[i] = {areaId: unsortedBuffer[i].areaId, zone: []};
      for (let j = 0; j < zone.length; j++) {
        const element = zone[j];
        if (this.areas[i].zone.map(el => el.id).indexOf(element.id) === -1) {this.areas[i].zone.push(element);}
        for (let x = j+1; x < zone.length; x++) {
          let whereToInsert = 0;
          const iteratorElement = zone[x];
          if (iteratorElement.joinedWith === element.id){
            whereToInsert = this.areas[i].zone.map(el => el.id).indexOf(iteratorElement.id);
            if (whereToInsert !== -1) {
              this.areas[i].zone.splice( this.areas[i].zone.map(el => el.id).indexOf(iteratorElement.id),1 )
            } 
            this.areas[i].zone.splice( this.areas[i].zone.map(el => el.id).indexOf(element.id),0, iteratorElement )
          }
          if (element.joinedWith === iteratorElement.id){
            whereToInsert = this.areas[i].zone.map(el => el.id).indexOf(iteratorElement.id);
            if (whereToInsert !== -1) {
              this.areas[i].zone.splice( this.areas[i].zone.map(el => el.id).indexOf(iteratorElement.id),1 )
            }
            this.areas[i].zone.splice( Math.max(this.areas[i].zone.map(el => el.id).indexOf(element.id)+1, 0),0, iteratorElement ) 
          }
        }
      }
      
    }
  }
  
}

export interface zone {id: number, areaId: number, joinedWith: number | null, sku: string, defaultSku: string, status: "open"|"closed", countActive: number}