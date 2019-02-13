import ToneFactory from '../../lib/ToneFactory';


module.exports =  class {
    state: any
    
    onCreate(input, out) { 
        this.state  = {
            supported : false
        }
    }
    onMount(){
        
        this.state.supported = ToneFactory.Instance().UserMedia.supported
    }
    
}