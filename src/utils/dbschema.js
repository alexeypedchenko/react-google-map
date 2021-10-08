export const category = {
  _id: 'id:category',
  type: 'category',
  name: 'category name',
  points: [
    'id:point',
  ]
}
export const point = {
  _id: 'id:point',
  type: 'point',
  name: 'point name',
  coordinates: {
    lat: 46.454428,
    lng: 30.739338,
  }
}
export const location = {
  _id: 'id:location',
  type: 'location',
  name: 'location name',
  points: [
    'id:point',
  ],
  locationPoints: [
    {
      _id: 'id:location_point',
      type: 'location_point',
      name: 'location point name',
      map: {
        lat: '46.454428',
        lng: '30.739338',
      }
    }
  ]
}