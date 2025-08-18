const exercises = [
    // Quads
    {
        "id": "1",
        "name": "Wall Sit",
        "category": "Strength",
        "primaryMuscle": "Quads",
        "secondaryMuscles": ["Glutes", "Hamstrings"],
        "equipment": "Bodyweight"
    },
    {
        "id": "2",
        "name": "Jump Squats",
        "category": "Strength",
        "primaryMuscle": "Quads",
        "secondaryMuscles": ["Glutes", "Hamstrings"],
        "equipment": "Bodyweight"
    },
    {
        "id": "3",
        "name": "Dumbbell Reverse Lunges",
        "category": "Strength",
        "primaryMuscle": "Quads",
        "secondaryMuscles": ["Glutes", "Hamstrings"],
        "equipment": "Dumbbell"
    },
    {
        "id": "4",
        "name": "Resistance Band Monster Walks",
        "category": "Strength",
        "primaryMuscle": "Quads",
        "secondaryMuscles": ["Glutes", "Hamstrings"],
        "equipment": "Resistance Band"
    },
    {
        "id": "5",
        "name": "Dumbbll Step Ups",
        "category": "Strength",
        "primaryMuscle": "Quads",
        "secondaryMuscles": ["Glutes", "Hamstrings"],
        "equipment": "Dumbbell"
    },
    {
        "id": "6",
        "name": "Kettlebell Goblet Lateral Lunges",
        "category": "Strength",
        "primaryMuscle": "Quads",
        "secondaryMuscles": ["Glutes", "Hamstrings"],
        "equipment": "Kettlebell"
    },
    {
        "id": "7",
        "name": "Dumbbell Sumo Squats",
        "category": "Strength",
        "primaryMuscle": "Quads",
        "secondaryMuscles": ["Glutes", "Hamstrings"],
        "equipment": "Dumbbell"
    },
    {
        "id": "8",
        "name": "Dumbbell Burpee To Press",
        "category": "Strength",
        "primaryMuscle": "Legs",
        "secondaryMuscles": ["Hamstrings", "Glutes", "Chest", "Shoulders"],
        "equipment": "Dumbbell"
    },
    {
        "id": "9",
        "name": "Dumbbell Lunges",
        "category": "Strength",
        "primaryMuscle": "Quads",
        "secondaryMuscles": ["Glutes", "Hamstrings"],
        "equipment": "Dumbbells"
    },
    {
        "id": "10",
        "name": "Leg Extension",
        "category": "Strength",
        "primaryMuscle": "Quads",
        "secondaryMuscles": [],
        "equipment": "Machine"
    },
    {
        "id": "11",
        "name": "Kettlebell Goblet Squat",
        "category": "Strength",
        "primaryMuscle": "Quads",
        "secondaryMuscles": ["Hamstrings", "Legs"],
        "equipment": "Kettlebell"
    },
    {
        "id": "12",
        "name": "Dumbbell Goblet Squat",
        "category": "Strength",
        "primaryMuscle": "Quads",
        "secondaryMuscles": ["Hamstrings", "Legs"],
        "equipment": "Dumbbell"
    },
    {
        "id": "13",
        "name": "Dummbell Bulgarian Split Squat",
        "category": "Strength",
        "primaryMuscle": "Quads",
        "secondaryMuscles": ["Hamstrings", "Glutes"],
        "equipment": "Dumbbell"
    },

    // Glutes
    {
        "id": "14",
        "name": "Single Leg Hip Thrusts",
        "category": "Strength",
        "primaryMuscle": "Quads",
        "secondaryMuscles": ["Hamstrings", "Lower Back"],
        "equipment": "Bodyweight"
    },
    {
        "id": "15",
        "name": "Resistance Band Squat Walks",
        "category": "Strength",
        "primaryMuscle": "Quads",
        "secondaryMuscles": ["Quads"],
        "equipment": "Resistance Band"
    },

    // Chest
    {
        "id": "16",
        "name": "Dumbbell Chest Press",
        "category": "Strength",
        "primaryMuscle": "Chest",
        "secondaryMuscles": ["Triceps", "Shoulders"],
        "equipment": "Dumbbell"
    },
    {
        "id": "17",
        "name": "Push-Ups",
        "category": "Strength",
        "primaryMuscle": "Chest",
        "secondaryMuscles": ["Triceps", "Shoulders"],
        "equipment": "Bodyweight"
    },
    {
        "id": "18",
        "name": "TRX Chest Fly",
        "category": "Strength",
        "primaryMuscle": "Chest",
        "secondaryMuscles": ["Shoulders"],
        "equipment": "TRX"
    },
    {
        "id": "19",
        "name": "Dumbbell Arnold Press",
        "category": "Strength",
        "primaryMuscle": "Chest",
        "secondaryMuscles": ["Shoulders"],
        "equipment": "Dumbbell"
    },
    {
        "id": "20",
        "name": "TRX Push-Ups",
        "category": "Strength",
        "primaryMuscle": "Chest",
        "secondaryMuscles": ["Shoulders", "Triceps"],
        "equipment": "TRX"
    },
    {
        "id": "21",
        "name": "Dumbbell Close Grip Press",
        "category": "Strength",
        "primaryMuscle": "Chest",
        "secondaryMuscles": ["Triceps"],
        "equipment": "Dumbbell"
    },
    {
        "id": "22",
        "name": "TRX Atomic Push-Up",
        "category": "Strength",
        "primaryMuscle": "Chest",
        "secondaryMuscles": ["Shoulders", "Legs"],
        "equipment": "TRX"
    },
    {
        "id": "23",
        "name": "Dumbbell Man Makers",
        "category": "Strength",
        "primaryMuscle": "Chest",
        "secondaryMuscles": ["Shoulders", "Back", "Core", "Legs", "Arms"],
        "equipment": "Dumbbell"
    },

    // Hamstrings
    {
        "id": "24",
        "name": "Dumbbell Romanian Deadlift",
        "category": "Strength",
        "primaryMuscle": "Hamstrings",
        "secondaryMuscles": ["Glutes", "Lower Back"],
        "equipment": "Dumbbell"
    },
    {
        "id": "25",
        "name": "Single Leg Dumbbell RDL",
        "category": "Strength",
        "primaryMuscle": "Hamstrings",
        "secondaryMuscles": ["Glutes", "Lower Back"],
        "equipment": "Dumbbell"
    },
    {
        "id": "26",
        "name": "Kettlebell Swing",
        "category": "Strength",
        "primaryMuscle": "Hamstrings",
        "secondaryMuscles": ["Glutes", "Core"],
        "equipment": "Kettlebell"
    },
    {
        "id": "27",
        "name": "Kettlebell Single Leg Deadlifts",
        "category": "Strength",
        "primaryMuscle": "Hamstrings",
        "secondaryMuscles": ["Glutes", "Lower Back"],
        "equipment": "Kettlebell"
    },
    {
        "id": "28",
        "name": "Resistance Band Clamshells",
        "category": "Strength",
        "primaryMuscle": "Hamstrings",
        "secondaryMuscles": ["Glutes", "Core"],
        "equipment": "Resistance Band"
    },
    {
        "id": "29",
        "name": "Single Leg Glute Bridge",
        "category": "Strength",
        "primaryMuscle": "Hamstrings",
        "secondaryMuscles": ["Glutes", "Core"],
        "equipment": "Bodyweight"
    },
    {
        "id": "30",
        "name": "Dumbbell Stiff-Leg Deadlifts",
        "category": "Strength",
        "primaryMuscle": "Hamstrings",
        "secondaryMuscles": ["Glutes", "Lower Back"],
        "equipment": "Dumbbell"
    },

    // Shoulders
    {
        "id": "31",
        "name": "Dumbbell Shoulder Press",
        "category": "Strength",
        "primaryMuscle": "Shoulders",
        "secondaryMuscles": ["Triceps"],
        "equipment": "Dumbbell"
    },
    {
        "id": "32",
        "name": "Dumbbell Arnold Press",
        "category": "Strength",
        "primaryMuscle": "Shoulders",
        "secondaryMuscles": ["Triceps", "Upper Chest"],
        "equipment": "Dumbbell"
    },
    {
        "id": "33",
        "name": "Dumbbell Front + Lateral Raise Combo",
        "category": "Strength",
        "primaryMuscle": "Shoulders",
        "secondaryMuscles": ["Triceps", "Upper Chest"],
        "equipment": "Dumbbell"
    },
    {
        "id": "34",
        "name": "TRX Y-Pull",
        "category": "Strength",
        "primaryMuscle": "Shoulders",
        "secondaryMuscles": ["Upper Back"],
        "equipment": "TRX"
    },

    // Back
    {
        "id": "35",
        "name": "TRX Rows",
        "category": "Strength",
        "primaryMuscle": "Back",
        "secondaryMuscles": ["Biceps"],
        "equipment": "TRX"
    },
    {
        "id": "36",
        "name": "TRX Inverted Rows",
        "category": "Strength",
        "primaryMuscle": "Back",
        "secondaryMuscles": ["Biceps"],
        "equipment": "TRX"
    },
    {
        "id": "37",
        "name": "TRX Single Arm Rows",
        "category": "Strength",
        "primaryMuscle": "Back",
        "secondaryMuscles": ["Biceps", "Shoulders"],
        "equipment": "TRX"
    },
    {
        "id": "38",
        "name": "TRX Low Row",
        "category": "Strength",
        "primaryMuscle": "Back",
        "secondaryMuscles": ["Biceps", "Shoulders],
        "equipment": "TRX"
    },
   
    
    // Biceps
    {
        "id": "39",
        "name": "Dumbbell Curls",
        "category": "Strength",
        "primaryMuscle": "Biceps",
        "secondaryMuscles": [],
        "equipment": "Dumbbell"
    },
    {
        "id": "40",
        "name": "Resistance Band Bicep Curls",
        "category": "Strength",
        "primaryMuscle": "Biceps",
        "secondaryMuscles": [],
        "equipment": "Resistance Band"
    },
    {
        "id": "41",
        "name": "Resistance Band Hammer Curls",
        "category": "Strength",
        "primaryMuscle": "Biceps",
        "secondaryMuscles": [],
        "equipment": "Resistance Band"
    }, 
    {
        "id": "42",
        "name": "Resistance Band 21s Bicep Curls",
        "category": "Strength",
        "primaryMuscle": "Biceps",
        "secondaryMuscles": [],
        "equipment": "Resistance Band"
    },     

    // Triceps
    {
        "id": "43",
        "name": "Tricep Dips",
        "category": "Strength",
        "primaryMuscle": "Triceps",
        "secondaryMuscles": ["Shoulders", "Chest"],
        "equipment": "Bodyweight"
    },
    {
        "id": "44",
        "name": "Dumbbell Tricep Extensions",
        "category": "Strength",
        "primaryMuscle": "Triceps",
        "secondaryMuscles": ["Shoulders", "Chest"],
        "equipment": "Dumbbell"
    },
    {
        "id": "45",
        "name": "Dumbbell Overhead Tricep Press",
        "category": "Strength",
        "primaryMuscle": "Triceps",
        "secondaryMuscles": ["Shoulders", "Chest"],
        "equipment": "Dumbbell"
    },

    // Cardio
    {
        "id": "46",
        "name": "Running 2K",
        "category": "Cardio",
        "primaryMuscle": "Cardio",
        "secondaryMuscles": ["Legs"],
        "equipment": "Bodyweight"
    },
    {
        "id": "47",
        "name": "Cycling 10K",
        "category": "Cardio",
        "primaryMuscle": "Cardio",
        "secondaryMuscles": ["Quads", "Hamstrings"],
        "equipment": "Bike"
    },
    {
        "id": "48",
        "name": "Cycling 15K",
        "category": "Cardio",
        "primaryMuscle": "Cardio",
        "secondaryMuscles": ["Quads", "Hamstrings"],
        "equipment": "Bike"
    },
    {
        "id": "49",
        "name": "Cycling 20K",
        "category": "Cardio",
        "primaryMuscle": "Cardio",
        "secondaryMuscles": ["Quads", "Hamstrings"],
        "equipment": "Bike"
    },
    {
        "id": "50",
        "name": "Burpees",
        "category": "Cardio",
        "primaryMuscle": "Cardio",
        "secondaryMuscles": [],
        "equipment": "Bodyweight"
    }
    {
        "id": "51",
        "name": "Running 3K",
        "category": "Cardio",
        "primaryMuscle": "Cardio",
        "secondaryMuscles": ["Legs"],
        "equipment": "Bodyweight"
    },
    {
        "id": "52",
        "name": "Jumping Jacks",
        "category": "Cardio",
        "primaryMuscle": "Cardio",
        "secondaryMuscles": [],
        "equipment": "Bodyweight"
    },
    {
        "id": "53",
        "name": "Running 5K",
        "category": "Cardio",
        "primaryMuscle": "Cardio",
        "secondaryMuscles": ["Legs"],
        "equipment": "Bodyweight"
    },
    {
        "id": "54",
        "name": "Running 8K",
        "category": "Cardio",
        "primaryMuscle": "Cardio",
        "secondaryMuscles": ["Legs"],
        "equipment": "Bodyweight"
    },
    {
        "id": "55",
        "name": "Running 10K",
        "category": "Cardio",
        "primaryMuscle": "Cardio",
        "secondaryMuscles": ["Legs"],
        "equipment": "Bodyweight"
    },
    

    // Full Body
    {
        "id": "56",
        "name": "Yoga",
        "category": "Flexibility",
        "primaryMuscle": "Full Body",
        "secondaryMuscles": [],
        "equipment": "Mat"
    },
    {
        "id": "57",
        "name": "Dumbbell Thrusters",
        "category": "Strength",
        "primaryMuscle": "Full Body",
        "secondaryMuscles": ["Quads", "Glutes", "Hamstrings", "Triceps", "Lower Back"],
        "equipment": "Dumbbell"
    },
    {
        "id": "58",
        "name": "Burpees",
        "category": "Strength",
        "primaryMuscle": "Full Body",
        "secondaryMuscles": ["Quads", "Glutes", "Hamstrings", "Triceps", "Lower Back"],
        "equipment": "Bodyweight"
    },
    
    // Core
    {
        "id": "59",
        "name": "Plank",
        "category": "Strength",
        "primaryMuscle": "Core",
        "secondaryMuscles": ["Shoulders", "Back", "Arms"],
        "equipment": "Bodyweight"
    },
    {
        "id": "60",
        "name": "TRX Pike",
        "category": "Strength",
        "primaryMuscle": "Core",
        "secondaryMuscles": ["Shoulders", "Legs"],
        "equipment": "TRX"
    },
    {
        "id": "61",
        "name": "Side Plank",
        "category": "Strength",
        "primaryMuscle": "Core",
        "secondaryMuscles": ["Shoulders", "Glutes"],
        "equipment": "Bodyweight"
    },
    {
        "id": "62",
        "name": "Plank To Push-Up",
        "category": "Strength",
        "primaryMuscle": "Core",
        "secondaryMuscles": ["Shoulders", "Glutes", "Shoulders"],
        "equipment": "Bodyweight"
    },    
];
