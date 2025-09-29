// Styles for Theme36Vision

const styles = {
  section: {
    paddingTop: "6rem",
    paddingBottom: "6rem",
    backgroundColor: "hsl(var(--background))",
  },
  sectionContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
  },
  sectionInner: {
    maxWidth: "64rem",
    margin: "0 auto",
  },
  header: {
    textAlign: "center",
    marginBottom: "4rem",
  },
  badge: {
    display: "inline-block",
    marginBottom: "1rem",
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    fontSize: "0.875rem",
    fontWeight: "500",
    backgroundColor: "hsl(var(--primary))",
    color: "hsl(var(--primary-foreground))",
    borderRadius: "0.375rem",
  },
  title: {
    fontFamily: "var(--font-display)",
    fontSize: "3rem",
    fontWeight: "700",
    color: "hsl(var(--foreground))",
    lineHeight: "1.1",
    marginBottom: "1.5rem",
  },
  titleMobile: {
    fontFamily: "var(--font-display)",
    fontSize: "2.5rem",
    fontWeight: "700",
    color: "hsl(var(--foreground))",
    lineHeight: "1.1",
    marginBottom: "1.5rem",
  },
  subtitle: {
    fontSize: "1.25rem",
    color: "hsl(var(--muted-foreground))",
    lineHeight: "1.625",
    maxWidth: "48rem",
    margin: "0 auto",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "2rem",
  },
  gridMobile: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "2rem",
  },
  card: {
    padding: "2rem",
    backgroundColor: "hsl(var(--card))",
    borderRadius: "0.5rem",
    boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    transition: "all 0.3s",
  },
  icon: {
    color: "hsl(var(--primary))",
    marginBottom: "1.5rem",
  },
  cardTitle: {
    fontFamily: "var(--font-display)",
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "hsl(var(--foreground))",
    marginBottom: "1rem",
  },
  cardText: {
    fontSize: "1.125rem",
    color: "hsl(var(--muted-foreground))",
    lineHeight: "1.625",
    marginBottom: "1.5rem",
  },
  quote: {
    fontSize: "1rem",
    fontStyle: "italic",
    color: "hsl(var(--primary))",
    borderLeft: "3px solid hsl(var(--primary))",
    paddingLeft: "1rem",
  },
  visionStatement: {
    marginTop: "5rem",
    textAlign: "center",
  },
  visionCard: {
    padding: "3rem",
    background: "linear-gradient(135deg, hsla(var(--primary), 0.1) 0%, hsla(var(--accent), 0.1) 100%)",
    border: "1px solid hsla(var(--primary), 0.2)",
    borderRadius: "0.5rem",
  },
  visionTitle: {
    fontFamily: "var(--font-display)",
    fontSize: "2rem",
    fontWeight: "600",
    color: "hsl(var(--foreground))",
    marginBottom: "1.5rem",
  },
  visionText: {
    fontSize: "1.25rem",
    color: "hsl(var(--muted-foreground))",
    lineHeight: "1.625",
    maxWidth: "48rem",
    margin: "0 auto",
  },
  gradientText: {
    display: "block",
  },
};

export default styles;
