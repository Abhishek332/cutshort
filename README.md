* This is a Multi Step Form build in React. You can visit it ["here"][1].
* It have feature to automatic update based on inputData.
* You just have to go in src/data/formData.ts to add any new screen in it.
* It have two types of screens 
            i) InputTypeScreen
            ii) SelectTypeScreen

* For Input Screen you have to add data in this structure -
            {
                type: string;
                heading: string;
                note: string; (optional)
                ctaText: string;
                inputs : Array({
                    name: string; (This name should be same as you want in Redux state)
                    label: string; (optional)
                    required : boolean; (optional)
                    type : string; (optional, by default it take text type)
                })
            }

* For Select Screen you have to add data in this structure -
            {
                type: string;
                heading: string;
                note: string; (optional)
                ctaText: string;
                options : Array({
                    logo: string;
                    heading: string;
                    description: string;
                })
                stateKey : string; (This stateKey should be same as you want in Redux state)
            }

* Now go in src/redux/multiStepFormSlice.ts and add properties in intialState object.

=================================================================================================
note : For type Input screen 'name' field will be add as property in Redux State.
For type Select screen 'stateKey' field will be add as property in Redux State.
=================================================================================================

Example of Data - 

[
    {
    type: "input",
    heading: "let's set up a home for all your work",
    note: "you can always create another workspace later.",
    inputs: [
      {
        name: "workspaceName",
        label: "workspace Name",
        required: true,
      },
      {
        name: "workspaceUrl",
        label: "workspace url",
        required: true,
      },
    ],
    ctaText: "create workspace",
  },
  {
    type: "selector",
    stateKey: "planToUse",
    heading: "How are you planning to use Eden?",
    note: "we'll streamline your setup experience accordingly.",
    options: [
      {
        logo: "person.png",
        heading: "for myself",
        description: "Write better. Think more clearly. Stay organized.",
      },
      {
        logo: "people.png",
        heading: "with my team",
        description: "Wikis, docs, tasks & projects, all in one place.",
      },
    ],
    ctaText: "create workspace",
  },
]

Redux intial State - 
{
 workspaceName : '',
 workspaceUrl : '',
 planToUse : ''   
}






[1] : https://cutshort-test.netlify.app 
