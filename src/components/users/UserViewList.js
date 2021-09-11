import {React,useState,useRef} from 'react'
import Avatar from '../../common/avatar/Avatar';
import {Button,Tooltip,OverlayTrigger,Image} from 'react-bootstrap'


export default function UserViewList({user}) {

function Example(homeTown,address) {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
     <OverlayTrigger placement="bottom"
    overlay={<Tooltip id="button-tooltip-2">{address}</Tooltip>}
  >
    {({ ref, ...triggerHandler }) => (
      // <Button
      //   variant="light"
      //   {...triggerHandler}
      //   className="d-inline-flex align-items-center"
      // >
      //   <Image
      //     ref={ref}
      //     roundedCircle
      //     src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fhome%2Baddress&psig=AOvVaw13w60JnAlTq1kLVLSwUaYu&ust=1631436385294000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOjn2aXE9vICFQAAAAAdAAAAABAD"
      //   />
        <span className="ms-1">{homeTown}</span>
      // </Button>
    )}
  </OverlayTrigger>,
    </>
  );
}

    return (
        
           <>
          


    <tr>
      <td> <div className="border-bottom d-flex py-2">
                {user.image ? (
                     <div className="rounded-circle">
                         <img
                            // src={base64ToBlob(user.image)}
                            src="jj"
                             alt="Logo"
                            className="rounded-circle"
                            style={{ width: "35px" }}
                                />
                              </div>
                            ) : (
                              <>
                                {/* <span
                                  className="p-0 rounded-circle text-center text-white align-self-center avatarIcon"
                                  style={
                                    user.name[0]
                                      .toUpperCase()
                                      .match(/[A-Z]/i)
                                      ? {
                                          background:
                                            AvatarColors[
                                              user.name[0].toUpperCase()
                                            ],
                                          transform: "scale(1.3)"
                                        }
                                      : {
                                          background: "black",
                                          transform: "scale(1.3)"
                                        }
                                  }
                                >
                                  {user.name[0].toUpperCase()}
                                </span> */}
                                <Avatar data={user.name}/>
                              </>
                            )}
                              </div></td>
      <td>{user.prnNo}</td>
      <td>{user.name}</td>
      <td>{user.dateofBirth}</td>
      <td>{user.email}</td>
        <td>{user.mobile}</td>
      <td>{Example(user.homeTown,user.residentialAddress)}
      </td>
    </tr>
 

                        
                        </>
        
    )
}
