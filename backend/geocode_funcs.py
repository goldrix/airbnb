from apikey import get_key # replace with your own api key file
import json 
import googlemaps 


#auth = key.cloud_api 
bmaps = googlemaps.Client(key = get_key()) #reference your own api key file



def ToGeoCode(address): 
    geocoded = bmaps.geocode(address) 
    lat = geocoded[0]["geometry"]["location"]["lat"] 
    long = geocoded[0]["geometry"]["location"]["lng"] 
    coordinates = str(lat) + ', ' +  str(long)
    return coordinates 



def ToAdress(geocode): #converts list of coordinates to a formatted address
   latitude = geocode[0] 
   longitude = geocode[1] 
   address = bmaps.reverse_geocode((latitude,longitude)) 
   fixed_address = address[0]['formatted_address'] 
   return str(fixed_address) 

#make sure to pass the longitude and latitude to this as a tuple (lat, long) or just use the plain-text address name of choice 
def time_n_distance(origin,end,output): #calls on distance matrix, pulls relevant info (distance + travel time) and makes new json   
    distance = gmaps.distance_matrix(origin, end, mode='walking')["rows"][0]["elements"][0]["distance"]["value"] #distance is a float
    time_ = gmaps.distance_matrix(origin, end, mode='walking')["rows"][0]["elements"][0]["duration"]["text"] #time is a string
    if output == "distance": 
        return distance 
    elif output == "time": 
        return time_ 
    else: 
        print(" ")




