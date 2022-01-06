import { Card, Button, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom'

export default function BusArrangements(line) {
    var departure_day = line.obj.departure_day;
    var a = departure_day.slice(0,10);
    var departure_time = line.obj.departure_time;
    var b = departure_time.slice(-9,-1);
    var next_hour = line.obj.next_hour;
    var c = next_hour.slice(-9,-1);
    return (
        <Col md={4} xs={12}>
            <Card className={line.active}>
                <Card.Body>
                    <Card.Title>
                        Chuyến: <strong>{line.obj.name}</strong>
                    </Card.Title>

                    <Card.Title>
                        Hạng: <strong>{line.obj.description}</strong>
                    </Card.Title>
                    
                    <Card.Text>
                        <div className="my-3">
                            Ngày khởi hành: {a} <br/>
                            Ngày - giờ khởi hành: <br/>{b}<br/>
                            Ngày - giờ đến: <br/>{c}<br/>
                        </div>
                    </Card.Text>
                    
                    <Card.Text>
                        Giá vé: ${line.obj.ticket_price}
                    </Card.Text>
                    <Link to= {`/busarrangements/${line.obj.id}`} >
                        <Button>Đặt vé</Button>
                    </Link> 
                    <span className='ml-2'>
                    <a href={`/cmt_busarrangements/${line.obj.id}/`} >
                        <Button>Chi Tiết Vé</Button>
                    </a>
                    </span>
                    
                </Card.Body>
            </Card>      
        </Col>
    )
}