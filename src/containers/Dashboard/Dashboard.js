import React from 'react'
import NavigationBar from "../../components/Navbar/NavigationBar"
import Tile from "../../components/Tile/Tile"
import Chart from "../../components/Chart/Chart"
import { makeStyles } from '@material-ui/core/styles';
import {Container,Grid,Paper} from '@material-ui/core';
import Data from "../../data/data.json"
import TableData from "../../components/TableData/TableData"
import Titles from "../../data/titles"
import Hoc from "../../hoc/Hoc"

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    
    menuButton: {
      marginRight: 36,
    },
    menuButtonHidden: {
      display: 'none',
    },
    title: {
      flexGrow: 1,
    },
    
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    },
  }));



const Dashboard = () => {
        const classes = useStyles();
        const data = Data;
        const createData = (id, total_amount, total_quantity, user_name)=> {
          return { id, total_amount, total_quantity, user_name};
      }
      const rows = [
          createData(0,3245, 100,  'Tupelo, MS'),
          createData(1,32323,200 , 'Tupelo, MS'),
          createData(2,12357,300 , 'Tupelo, MS'),
          createData(3,20000,400 , 'Tupelo, MS'),
          createData(4,70000,500 , 'Tupelo, MS'),
        ];
        return (
            <div>
                <NavigationBar/> 
                    <Hoc>
                        <main className={classes.content}>
                        <div className={classes.appBarSpacer} />
                            <Container maxWidth ='lg' className={classes.container}>
                                <Grid container >
                                  <Grid item xs={12} md={3} >
                                    <Tile title_1 = {Titles.T1} value_1 = {data.Row_1.Tile_1.today_order} title_2 = {Titles.T2} value_2={data.Row_1.Tile_1.current_week_order}/>
                                  </Grid>
                                  <Grid item xs={12} md={3} >
                                  <Tile title_1 = {Titles.T3} value_1 = {data.Row_1.Tile_2.today_order_amount} title_2 = {Titles.T4} value_2={data.Row_1.Tile_2.current_week_amount}/>
                                  </Grid>
                                  <Grid item xs={12} md={3} >
                                  <Tile title_1 = {Titles.T5} value_1 = {data.Row_1.Tile_3.mtd_order} title_2 = {Titles.T6} value_2={data.Row_1.Tile_3.last_month_order}/>
                                  </Grid>
                                  <Grid item xs={12} md={3} >
                                  <Tile title_1 = {Titles.T7} value_1 = {data.Row_1.Tile_4.mtd_order_amount} title_2 = {Titles.T8} value_2={data.Row_1.Tile_4.last_month_amount}/>
                                  </Grid>
                                  <Grid item md={12} xs={12}>
                                    <Paper className={classes.paper}>
                                      <Chart/>
                                    </Paper>
                                  </Grid>
                                  <Grid style={{marginTop:"10px"}} item md={6} xs={12}>
                                    <Paper className={classes.paper}>
                                      <TableData data={rows} col1="Order No" col2="Total Amount" col3="Total Quantity" col4="Username"/>
                                    </Paper>
                                  </Grid>
                                  <Grid style={{marginTop:"10px"}} item md={6} xs={12}>
                                    <Paper className={classes.paper}>
                                      <TableData data={rows} col1="Order No" col2="Total Amount" col3="Total Quantity" col4="Username"/>
                                    </Paper>
                                  </Grid>
                                </Grid>
                            </Container>
                        </main>
                    </Hoc>
            </div>
        )
    }



export default Dashboard