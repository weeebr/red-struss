import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import styled from "styled-components";

const Accordeon = styled(ExpansionPanel)`
  && {
    box-shadow: none;
  }
`;

export const LeitbildPhilosophie = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  React.useEffect(() => setExpanded("panel0"), []);

  const data = [
    {
      title: "Was wir wollen...",
      subtitle: "Unsere Vision",
      text: [
        "Es gab eine Zeit, bevor die blauen PET-Sammelbehälter alltäglicher Bestandteil von unzähligen Verkaufsstellen und Büroräumen waren. Ebenso gab es eine Zeit, als Getrenntsammelstellen an Schweizer Bahnhöfen kaum jemandem in den Sinn gekommen wären. Heute ist beides zu einer allgemeinen Selbstverständlichkeit geworden. Und es wird eine Zeit kommen, wo einzelne öffentliche Mülleimer ohne Möglichkeit zur Getrenntsammlung kaum mehr anzutreffen sind, wo Kunststoffrecycling wie in Deutschland etabliert und selbstverständlich ist – je früher, desto besser.",
        "Denn spätestens, wenn die Hälfte des Planeten dereinst tatsächlich unter Schutz gestellt wird (und das ist für den Erhalt eines funktionierenden Ökosystems zwingend nötig und wird weltweit von einflussreichen Bewegungen bereits heute immer lauter gefordert), wird sich auch die breite Öffentlichkeit mit dem bisher kaum geschätzten Wert unzähliger Ressourcen ernsthafter auseinandersetzen müssen. Ressourcen, die tagtäglich in unvorstellbaren Mengen unwiederbringlich im Müll verschwinden, verbrannt werden, obwohl sie – oft sogar mit relativ bescheidenem Aufwand, dafür umso höherem energetischen Ertrag – rezykliert und damit wiederverwertbar gemacht werden könnten.",
        "Doch bis dahin möchten wir nicht auf die schwerfällige Politik warten, wir nehmen das Ruder selbst in die Hand, werden aktiv, engagieren uns mit konkretem Handeln für folgende Generationen und die ökologischen Bedingungen, welche sie antreffen. Wir müssen als Gesellschaft, als Menschheit zusammenstehen und an einem Strang ziehen. Wir sind genug, wir hätten es in der Hand, die Welt zu verändern. Und dazu reicht es bereits, wenn jeder einzelne seinen Beitrag leistet. Wir tun es und unterstützen jeden dabei, der sich dem anschliessen möchte. Die Zeit des Zusehens und Abwartens ist vorbei.",
      ],
    },
    {
      title: "Was wir tun...",
      subtitle: "Unsere Mission",
      text: [
        "Für uns ist die tatsächliche Situation massgeblich, nicht ein „noch-besser-wäre-es-wenn“-Szenario, welches oft als Vorwand für völlige Tatenlosigkeit angeführt wird. Wir teilen zwar die Ansicht uneingeschränkt, dass eine drastische Reduktion des Konsums der nachhaltigste Weg zum Erhalt unserer Umwelt wäre. Aber konsumiert wird nunmal, und wo konsumiert wird, entsteht Abfall. Wir haben uns auf die Fahne geschrieben, Recyclingquoten zu verbessern, den Kreis zu schliessen. Dafür setzen wir uns Tag für Tag mit grosser Motivation, Herzblut und Leidenschaft ein. Das beginnt im Kleinen, und nach oben lassen wir uns nicht einschränken. Von der Beratung und Sensibilisierung über Konzeptionierung bis hin zur Umsetzung, zum „Sich-die-Hände-schmutzig-machen“ – wir tun alles, was unseren Zielen dient. Wir bewegen uns nötigenfalls bis an die Grenze des Machbaren und suchen nach Wegen, diese Grenzen auszudehnen. Wir scheuen keinen Aufwand, leisten unbeirrt unseren Anteil zum Schutz der Umwelt und einem verantwortungsvolleren Umgang mit Ressourcen.",
        "Was dies konkret bedeuten kann, finden Sie <a href='/angebote'>hier</a>",
      ],
    },
    {
      title: "Was uns ausmacht...",
      subtitle: "Unsere Werte",
      text: [
        "RED Struss steht für den erfolgreichen Spagat zwischen ideologischem Utopismus und einer modernen und wirtschaftlichen Unternehmenskultur, zwischen hingebungsvoller Liebe zum Detail und effektiver, zweckmässiger Effizienz.",
        "Im Umgang sowohl miteinander als auch mit unseren Anspruchsgruppen legen wir grössten Wert auf gegenseitigen Respekt, Fairness und Transparenz, auch wenn dies zuweilen bedeuten kann, gewisse wirtschaftliche Risiken in Kauf zu nehmen.",
        "Im Vordergrund stehen unsere Ziele, im Mittelpunkt der Mensch – nicht als blosse Arbeitskraft, als Geldgeber oder als Konsument, sondern als Individuum mit vielfältigen Bedürfnissen und als Mitbewohner auf unserem Heimatplaneten.",
        "Entscheidend sind für uns die Taten eines Menschen oder eines Unternehmens, nicht seine Worte; daran messen wir sowohl uns selbst als auch unsere Partner. Entsprechend sind sowohl die Mitarbeitenden als auch die Netzwerkpartner von RED Struss sorgsam ausgewählt und auf unsere ethischen und qualitativen Anforderungen hin überprüft. Unsere Erfahrungen bestätigen unseren Grundsatz, dass stilles, unermüdliches Vorleben wirkungsvoller ist als der erhobene Zeigefinger.",
        "Wir sind davon überzeugt, dass wir in unserer Gesellschaft durch Allianzen immer mehr erreichen weder als Einzelkämpfer. Wo Zielharmonien vorliegen, strebt RED Struss immer eine für beide Seiten gewinnbringende Zusammenarbeit an, anstatt einander die Existenz streitig machen zu wollen. Konkurrenz leben wir einzig gegen Mitbewerbende aus, welche uns, unseren Zielen und der ganzen Branche durch unethisches, intransparentes und rein profitorientiertes Geschäftsgebaren aktiv Schaden zufügen.",
        "RED Struss ist ein junges, dynamisches Unternehmen, und das wird es auch bleiben. Denn wir leben im steten Bewusstsein, dass uns die Zukunft gehört. Ob unsere Vision realistisch ist oder nicht, darüber liesse sich vielleicht diskutieren – doch wer nichts wagt, gewinnt nichts. Einer muss immer den ersten Schritt machen. Und wir sind dieser eine.",
      ],
    },
  ];

  return (
    <>
      {data.map((d, idx) => (
        <Accordeon
          expanded={expanded === `panel${idx}`}
          onChange={handleChange(`panel${idx}`)}
          key={d.title}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id={`panel${idx}bh-header`}
          >
            <Typography>{d.title}</Typography>
            <Typography>{d.subtitle}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              {d.text.map(t => (
                <span key={t}>{t}</span>
              ))}
            </Typography>
          </ExpansionPanelDetails>
        </Accordeon>
      ))}
    </>
  );
};

export default LeitbildPhilosophie;
