import googlemaps
import pprint
import time
import json
import geocode_funcs
from apikey import get_key

class Searcher:
    def __init__(self, address, distance, catagory_name, json_name):        
        self.json_name = json_name 
        self.current_location = geocode_funcs.ToGeoCode(address)
        self.distance = distance
        self.gmaps = googlemaps.Client(key = get_key())
        self.search(catagory_name, False) #currently ignoring wether open or not.

    def search(self, type_, isOpen):
        if (type_ == "local_attractions"):
            type_arry = ['museum', 'aquarium', 'amusement_park', 'art_gallery', 'movie_theater', 'zoo', 'casino']
            self.json_maker(self.dic_maker_special(type_arry), self.json_name)
        elif (type_ == "local_essentials", self.json_name):
            type_arry = ['laundry', 'pharmacy', 'police', 'hospital',  'bank']
            self.json_maker(self.dic_maker_special(type_arry), self.json_name)
        else :
            places_result = self.gmaps.places_nearby(location = self.current_location, radius = self.distance, type = type_)
            self.json_maker(self.dic_maker(places_result), self.json_name)

    '''
    def arr_maker(self, places_result):
        master_array = [[],[],[],[]]
        for element in places_result['results']:
            master_array[0].append(element['name'])
            master_array[1].append(element['vicinity'])
            master_array[2].append(element['price_level'])      
            master_array[3].append(element['rating'])
            
        return master_array
    '''

    def dic_maker(self, places_result):
        #only use in local eats !!!!!!!!
        master_dict = {}
        i = 0
        for element in places_result['results']:
            master_dict[i] = {}
            master_dict[i]['name'] = element['name']
            master_dict[i]['address'] = element['vicinity']
            master_dict[i]['type'] = 'resturant' #hardcoded
            i += 1
        return master_dict

    def dic_maker_special(self, type_arry): 
        master_dict = {}
        i = 0
        for sub_type in type_arry:
            places_result = self.gmaps.places_nearby(location = self.current_location, radius = self.distance, type = sub_type)
            for element in places_result['results']:
                if (self.dictContains(master_dict, element['vicinity']) == False):
                    master_dict[i] = {}
                    master_dict[i]['name'] = element['name']
                    master_dict[i]['address'] = element['vicinity']
                    master_dict[i]['type'] = sub_type
                    #master_dict[i]['distance'] = foo(self.current_location, element['vicininty'], distance_or_time)
                    i += 1
        return master_dict

    def json_maker(self, master_dict, file_name):
        with open(file_name, 'w') as json_file:
            json.dump(master_dict, json_file)

    def dictContains(self, master_dict, address):
        for element in master_dict:
            if(master_dict[element]['address'] == address):
                return True
        return False
    
    '''
    def ToGeoCode(self, address):
        geocoded = self.gmaps.geocode(address) 
        lat = geocoded[0]["geometry"]["location"]["lat"] 
        long = geocoded[0]["geometry"]["location"]["lng"] 
        coordinates = str(lat) + ', ' +  str(long)
        return coordinates 
    '''

