import Card from './Card'

const CardList = ({ robots }) => {
    return (
      <div>
        {robots ? robots.map( robot => {
          return <Card key={robot.id} {...robot}/>
        }) : '' }
      </div>

    )
};

export default CardList;