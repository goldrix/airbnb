from apikey import get_key # replace with your own api key file
import json 
import googlemaps 


auth = key.cloud_api 
gmaps = googlemaps.Client(key = get_key()) #reference your own api key file



def ToGeoCode(address): 
    geocoded = gmaps.geocode(address) 
    lat = geocoded[0]["geometry"]["location"]["lat"] 
    long = geocoded[0]["geometry"]["location"]["lng"] 
    coordinates = [lat,long] 
    return coordinates 



def ToAdress(geocode): #converts list of coordinates to a formatted address
   latitude = geocode[0] 
   longitude = geocode[1] 
   address = gmaps.reverse_geocode((latitude,longitude)) 
   fixed_address = address[0]['formatted_address'] 
   return str(fixed_address) 





