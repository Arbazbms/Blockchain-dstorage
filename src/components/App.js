import DStorage from '../abis/DStorage.json'
import React, { Component } from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Navbar'
import Landing from "./Dashboard";
import UploadFile from './UploadFile';
import ListFile from "./ListFile";
import FileRetrieve from './FileRetrieve';
import Web3 from 'web3';
import './App.css';
import Home from './Home';

//Declare IPFS
const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' }) // leaving out the arguments will default to these values

class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }


  async loadBlockchainData() {
    const web3 = window.web3
    // Load account
    const accounts = await web3.eth.getAccounts()
    console.log(accounts);
    this.setState({ account: accounts[0] })
    // Network ID
    const networkId = await web3.eth.net.getId()
    const networkData = DStorage.networks[networkId]
    if (networkData) {
      // Assign contract
      const dstorage = new web3.eth.Contract(DStorage.abi, networkData.address)
      this.setState({ dstorage })
      // Get files amount
      const filesCount = await dstorage.methods.fileCount().call()
      this.setState({ filesCount })
      // Load files&sort by the newest
      for (var i = filesCount; i >= 1; i--) {
        const file = await dstorage.methods.files(i).call()
        this.setState({
          files: [...this.state.files, file]
        })
      }
    } else {
      window.alert('DStorage contract not deployed to detected network.')
    }
    this.setState({ loading: false })
  }

  // Get file from user
  captureFile = event => {
    event.preventDefault()

    const file = event.target.files[0]
    const reader = new window.FileReader()

    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      this.setState({
        buffer: Buffer(reader.result),
        type: file.type,
        name: file.name
      })
      console.log('buffer', this.state.buffer)
    }
  }


  //Upload File
  uploadFile =( description, category) => {
    console.log("Submitting file to IPFS...")

    // Add file to the IPFS
    ipfs.add(this.state.buffer, (error, result) => {
      console.log('IPFS result', result)
      if (error) {
        console.error(error)
        return
      }

      this.setState({ loading: true })
      // Assign value for the file without extension
      if (this.state.type === '') {
        this.setState({ type: 'none' })
      }
      this.state.dstorage.methods.uploadFile(result[0].hash, result[0].size, this.state.type, this.state.name, description, category).send({ from: this.state.account }).on('transactionHash', (hash) => {
        this.setState({
          loading: false,
          type: null,
          name: null
        })
        window.location.reload()
      }).on('error', (e) => {
        window.alert('Error')
        this.setState({ loading: false })
      })
    })
  }


  //Set states
  constructor(props) {
    super(props)
    this.state = {
      account: '',
      dstorage: null,
      files: [],
      loading: false,
      type: null,
      name: null
    }
    console.log("Files from App: "+typeof(this.state.files))
    //Bind functions
  }

  render() {
    return (
      <>
        <Navbar account={this.state.account} />
        {this.state.loading
          ? <div id="loader" className="text-center mt-5"><h1>Loading...<i class="fa fa-cog fa-spin fa-fw"></i></h1></div>
          : <Routes>
              <Route path="/" element={<Home files={this.state.files} count={this.state.files.length} />} />
              <Route path="/dashboard" element={<Landing account={this.state.account} count={this.state.files.length} />} />
              <Route path="/uploadFile" element={<UploadFile captureFile={this.captureFile} uploadFile={this.uploadFile} />} />
              <Route path="/listFiles" element={<ListFile files={this.state.files} count={this.state.files.length} />} />
              <Route path="/retrieve" element={<FileRetrieve />} />
          </Routes>
        }
        {/* <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/uploadFile" element={<UploadFile captureFile={this.captureFile} uploadFile={this.uploadFile} />}  />
                <Route path="/listFiles" element={<ListFile  files={this.state.files} />} />
                <Route path="/retrieve" element={<FileRetrieve />} />
        </Routes> */}
      </>
    );
  }
}

export default App;